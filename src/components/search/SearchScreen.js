import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {

    const initialForm = { searchText: "" };

    const [formValue, handleInputChange, reset] = useForm(initialForm);

    const { searchText } = formValue;

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
            </div>
        </>
    )
}
