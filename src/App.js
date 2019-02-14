import React, { Component } from 'react';
import { PokemonList } from './containers/pokemonList';
import { PokemonProfile } from './containers/pokemonProfile';
//import {PokeAPIList} from './components/pokeAPIList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
      pokeList: [],
      pokeProfile: {},
      moves: [],
      show: false,
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20", {
      headers: {
        "access-control-allow-origin": "*"
      }
    })
      .then(res =>
        res.json()
      )
      .then(
        (result) => {
          console.log('THIS IS RESULT', result)
          this.setState({
            isLoaded: true,
            pokeList: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  togglePageView = (index) => {
    this.setState({ homepage: false })
  }

  render() {
    const { homepage } = this.state;
    const pokemonList = this.state.pokeList;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <>
        <br />
        <br />
        <h1>Search Bar!</h1>
        {homepage === true ?
          <PokemonList data={pokemonList} click={this.togglePageView} /> :
          <PokemonProfile />}
      </>

    }
  }
}

export default App;
