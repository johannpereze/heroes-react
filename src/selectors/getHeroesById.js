import { heroes } from "../data/heroes"

export const getHeroesById = (heroId) => heroes.find(hero => hero.id === heroId)

