import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

    const initialForm = { searchText: "" };

    const [formValue, handleInputChange, reset] = useForm(initialForm);

    const { searchText } = formValue;
    const heroesFiltered = getHeroesByName()
    console.log(heroesFiltered);

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(formValue.searchText);
        reset()
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
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {heroesFiltered.map(hero =>
                        <HeroCard key={hero.id} {...hero} />
                    )}
                </div>
            </div>
        </>
    )
}
