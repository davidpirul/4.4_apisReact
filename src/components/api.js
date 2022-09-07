export const buscarPokemons = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) { }
}

export const obtPokemones = async (limit = 15, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) { }

}

export const obtPokemonesData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) { }

}