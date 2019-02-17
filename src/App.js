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
      moves: [],
      show: false,
      isLoaded: false,
      error: null,
      pokeNameNum: [] //the first index of this arr will always be the name of pokemon, to use for profile 

    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=21&limit=20")
      .then(res =>
        res.json()
      )
      .then(
        (result) => {
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
      const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
      fetch(pokemonAPI)
        .then(res =>
          res.json()
        )
        .then(res => {
          const movesArr = res.moves;
          const newMovesArr = [];
          for (let i = 0; i < movesArr.length; i++) {
            let moveName = movesArr[i].move.name;
            newMovesArr.push(moveName);
          }
          return newMovesArr
        })
        .then(res => {
          this.setState({ moves: res, homepage: false, pokeNameNum: profileData })
        })

    } else {
      this.setState({ homepage: true });
    }
  }

  handleMovesClick = (index) => {
    this.setState({ show: true });
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
          <PokemonProfile data={pokeNameNum} movesData={moves} click={this.togglePageView} movesclick={this.handleMovesClick} />}
      </>

    }
  }
}

export default App;
