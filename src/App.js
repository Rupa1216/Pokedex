import React, { Component } from 'react';
import './App.css';
// import { Input } from 'reactstrap';
import Header from './components/header';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    title: 'Pursuit Pokedex',
    homepage: true, // toggle for whether user is on Homepage or Profile page
    pokeList: [], // An arr of objs that will load in batches of 20
    // TA suggestion: store pokelist in a JSON on a separate pg and import it to make it more readable
    pokeProfile: {}, // Contains the response data on selected pokemon
    moves: [], // a unique list of moves of the selected pokemon
    show: false // toggle for whether the Move modal will render on the UI
    // TA suggestion: store show's value in an empty str; 
    // eventHandler will fill in the str and pass it into a func somewhere that makes modal pop up
  }
}

  render() {
    return (
      
      <Header />
      
    );
  }
}

export default App;
