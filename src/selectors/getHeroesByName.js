import { heroes } from '../data/heroes.js'

export const getHeroesByName = (name = '')=>{

    if(name === ''){
        return [];
    }


    name = name.toLowerCase();

    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));

}