import React from "react";
import PokeCard from "./Card.js";
import { obtPokemones, obtPokemonesData, buscarPokemons } from "./api.js";
import { useEffect, useState } from 'react';
import PokeBuscador from "./PokeBuscador.js";
import Paginador from "./Paginador.js";
import "../stylesheets/container.css"


function Pokeapi() {

  let iconoPokeApi = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true"

  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      const data = await obtPokemones(15, 15 * page);
      const promises = data.results.map(async (pokemon) => {
        return await obtPokemonesData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemon(results);
      setTotal(Math.ceil(data.count / 15));
      setNotFound(false);
    } catch (err) { }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total)
    setPage(nextPage)
  }

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    const result = await buscarPokemons(pokemon);
    if (!result) {
      setNotFound(true);
      return;
    } else {
      setPokemon([result])
      setPage(0);
      setTotal(1);
    }
  }

  return (
    <>

      <img src={iconoPokeApi} alt="logoPokeApi" />

      <PokeBuscador onSearch={onSearch} />
      <Paginador
        onLeftClick={lastPage}
        onRightClick={nextPage}
        page={page + 1}
        totalPages={total}
      />
      {notFound ?
        <div>No se encontro lo que buscabas...</div> :
        <PokeCard
          pokemons={pokemon}
          page={page}
          setPage={setPage}
          total={total}

        />}

    </>
  )
}
export default Pokeapi;