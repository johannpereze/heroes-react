import { Navigate, useParams } from "react-router-dom"
import { getHeroesById } from "../../selectors/getHeroesById"

export const HeroScreen = () => {

    // Get the heroeId from the URL
    const { heroeId } = useParams()

    const heroe = getHeroesById(heroeId)

    // If the heroeId is not found, redirect to the Marvel screen. This way we return a react functional component
    if (!heroe) {
        return (
            <Navigate to="/" />
        )
    }

    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = heroe

    return (
        <div>
            <h1>Hero Screen</h1>
            <h2>{superhero}</h2>
            <h2>{alter_ego}</h2>
        </div>
    )
}
