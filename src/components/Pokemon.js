import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/_pokemon.scss';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.addToFavorites2 = this.addToFavorites2.bind(this);
  }
  addToFavorites2 = (ev) => {
    const clickedPokemon = Number(ev.currentTarget.id);
    this.props.addToFavorites(clickedPokemon);
    console.log(clickedPokemon);
  };
  render() {
    //Aquí mapeo el array types de cada pokemonItem para pintar cada uno de los tipos
    const typesLi = this.props.types.map((type, index) => {
      return (
        <li className='card__types--kind' key={index}>
          {type}
        </li>
      );
    });

    //Y esta es la estructura de cada article, que es la tarjeta de cada pokemon
    return (
      <li
        className={`card card__container ${this.props.favorite}`}
        key={this.props.id}
        id={this.props.id}
        onClick={this.addToFavorites2}
      >
        <h2 className='card__title '>{this.props.name}</h2>
        <div className='img__container'>
          <img
            className='card__img'
            src={this.props.url}
            alt={`Foto de ${this.props.name}`}
          ></img>
        </div>
        <div className='types-container'>
          <h3 className='card__types--title'>Tipos:</h3>
          <ul className='card__types--list '>{typesLi}</ul>
        </div>
      </li>
    );
  }
}
Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
