import React, { Component } from 'react';
import { PokemonList } from './containers/pokemonList';
import { PokemonProfile } from './containers/pokemonProfile';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
      pokeList: [],//holds first 20 once page loads
      pokeProfile: {}, //full API Object for profile
      moves: [],//array of only moves names
      show: false,
      isLoaded: false,//turns true once page loads
      error: null,//if API fails error will display, page did not load
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

  //toggles page view and also calls second API with profile info
  togglePageView = (index, pokeNum) => {
    if (this.state.homepage === true) {
      const pokeName = this.state.pokeList[index].name;
      const pokeNameID = [pokeName, pokeNum]; //Pokemon name and number to use on profile view
      const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${pokeName}`; //this API gets the profile info
      fetch(pokemonAPI)
        .then(res =>
          res.json()
        )
        .then(res => {
          const profileData = res //the whole object from API
          const movesArr = res.moves; //an array of objects
          const newMovesArr = []; //array of just moves names
          for (let i = 0; i < movesArr.length; i++) {
            let moveName = movesArr[i].move.name;
            newMovesArr.push(moveName);
          }
          return {newMovesArr: newMovesArr, profileData: profileData } //an object has to be return to be able to pass multiple values
        })
        .then(res => {
          console.log(res.profileData)
          this.setState({ moves: res.newMovesArr, homepage: false, pokeNameNum: pokeNameID, pokeProfile: res.profileData })
        })

    } else {
      this.setState({ homepage: true });
    }
  }

  //once a move is clicked the show in state changes from false to true, the index of the move name is passed so you can use 
  handleMovesClick = (index) => {
    this.setState({ show: true });
  }

  render() {
    const pokemonList = this.state.pokeList;
    const { error, isLoaded, pokeNameNum, homepage, moves, pokeProfile } = this.state;
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
          <PokemonProfile data={pokeNameNum} movesData={moves} profile={pokeProfile} click={this.togglePageView} movesclick={this.handleMovesClick} />}
      </>

    }
  }
}

export default App;
