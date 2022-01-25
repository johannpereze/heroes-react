import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { herosImages } from "../../helpers/herosImages"
import { getHeroesById } from "../../selectors/getHeroesById"

export const HeroScreen = () => {

    // Get the heroeId from the URL
    const { heroeId } = useParams()

    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId])

    const navigate = useNavigate()

    // If the heroeId is not found, redirect to the Marvel screen. This way we return a react functional component
    if (!heroe) {
        return (
            <Navigate to="/" />
        )
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = heroe

    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img
                    src={herosImages(`./${heroeId}.jpg`)}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"><b>First Apperance:</b> {first_appearance} </li>
                    <h5 className="mt-3">Characters</h5>
                    <p>{characters}</p>
                    <button
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Regresar...
                    </button>
                </ul>
            </div>
        </div>
    )
}
