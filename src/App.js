import React, { Component } from 'react';

import {PokemonList} from './containers/pokemonList';
import {PokemonProfile} from './containers/pokemonProfile';
import {PokeAPIList} from './components/pokeAPIList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
      pokeList: [],
      pokeProfile: {},
      moves: [],
      show: false
    }
  }

  componentDidMount() {
    this.setState({
        pokeList:PokeAPIList.results,
    });
  }

  togglePageView = (index) =>{
this.setState({homepage: false})
  }
  render() {
    const {homepage} = this.state
    const pokemonList = this.state.pokeList
    return <>
        <br/>
        <br/>

        <h1>Search Bar!</h1>

        {homepage === true ?
            <PokemonList data={pokemonList} click={this.togglePageView}/> :
            <PokemonProfile />}
    </>
   
  }
}

export default App;
