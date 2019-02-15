import React, { Component } from 'react';
import { PokemonList } from './containers/pokemonList';
import { PokemonProfile } from './containers/pokemonProfile';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
      pokeList: [],
      pokeProfile: {},
      moves: ['jump'],
      show: false,
      isLoaded: false,
      error: null,
      pokeNameNum: [] //the first index of this arr will always be the name of pokemon, to use for profile 

    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
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

  togglePageView = (index, pokeNum) => {
    if (this.state.homepage === true) {
      const pokeName = this.state.pokeList[index].name;
      const profileData = [pokeName, pokeNum]; //Pokemon name and number to use on profile view
      this.setState({ homepage: false, pokeNameNum: profileData });

    } else {
      this.setState({ homepage: true });
    }
  }


  render() {
    const pokemonList = this.state.pokeList;
    const { error, isLoaded, pokeNameNum, homepage, moves } = this.state;
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
          <PokemonProfile data={pokeNameNum} movesData={moves} click={this.togglePageView} />}
      </>

    }
  }
}

export default App;
