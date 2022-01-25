import { Link } from "react-router-dom"
import { herosImages } from "../../helpers/herosImages"


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={herosImages(`./${id}.jpg`)} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p className="text-muted">{characters}</p>
                            }
                            <p className="text-muted">{first_appearance}</p>
                            <Link to={`/hero/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
