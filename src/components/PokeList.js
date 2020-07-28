import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/_pokelist.scss';

const PokeList = (props) => {
  //Mapeo el JSON (que he pasado por props desde App) para pintar un li por cada componente Pokemon al que lo voy a pasar en props el name, url y types
  const pokemonItems = props.pokemons.map((pokemon, index) => {
    return (
      <li className='card' key={index}>
        <Pokemon name={pokemon.name} url={pokemon.url} types={pokemon.types} />
      </li>
    );
  });

  //En la página inicial pinto una section con el h1 y un ul donde van a ir dentro todos los li de los pokemon pintados arriba (pokemonItems)
  return (
    <section className='page'>
      <h1 className='main-title'>
        Mi listado de <span className='main-title-pokemon'>Pokemon</span>
      </h1>
      <ul className='cards'>{pokemonItems}</ul>
    </section>
  );
};

export default PokeList;
