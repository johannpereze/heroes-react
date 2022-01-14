import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string';
import { useMemo } from "react";

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = "" } = queryString.parse(location.search)

    const initialForm = { searchText: q };

    const [formValue, handleInputChange] = useForm(initialForm);

    const { searchText } = formValue;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchText);
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un héroe..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={searchText}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-3"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7 animate__animated animate__fadeIn">
                    <h4>Resultados</h4>
                    <hr />
                    {q === '' ? <div className="alert alert-info">Busca un héroe</div> : heroesFiltered.length === 0 && <div className="alert alert-danger">No hay resultados para: {q}</div>}
                    {heroesFiltered.map(hero =>
                        <HeroCard key={hero.id} {...hero} />
                    )}
                </div>
            </div>
        </>
    )
}
