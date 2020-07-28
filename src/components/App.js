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
    };
  }

  //Pinto el componente PokeList al que le asigno el estado inicial
  render() {
    return (
      <div>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
