import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    // name = name.toLowerCase();
    // heroes.filter(hero => hero.superhero.toLowercase().includes(name));
    return heroes;
}