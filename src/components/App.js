import React from 'react';
import PokeList from './PokeList';
import '../stylesheets/App.scss';
import pokemonsFromApi from '../data/pokemons.json';

//Pongo es JSON en el estado inicial a través del constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonsFromApi,
      favorites: [], //Creo un array vacío
    };

    this.addToFavorites = this.addToFavorites.bind(this);
  }

  addToFavorites = (clickedPokemon) => {
    if (this.state.favorites.includes(clickedPokemon)) {
      this.setState((prevState) => {
        const newFavorites = prevState.favorites.filter(
          (favorite) => clickedPokemon !== favorite
        );
        return {
          ...prevState,
          favorites: newFavorites,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          favorites: prevState.favorites.concat(clickedPokemon),
        };
      });
    }
  };

  //Pinto el componente PokeList al que le asigno el estado inicial
  render() {
    return (
      <div>
        <PokeList
          pokemons={this.state.pokemons}
          addToFavorites={this.addToFavorites}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;
