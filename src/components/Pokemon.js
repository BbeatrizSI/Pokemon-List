import React from 'react';
import '../stylesheets/_pokemon.scss';

class Pokemon extends React.Component {
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
      <article className='card__container'>
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
      </article>
    );
  }
}

export default Pokemon;
