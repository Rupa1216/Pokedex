import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    homepage: true,
    pokeList: [], // have it on a JSON on a separate pg and import it to make it more readable
    pokeProfile: {}, 
    movePopup: false // make this an empty str. eventHandler will fill in the str and pass it into a func somewhere that makes it pop up
  }
}

  render() {
    return (
      <h1>hello world</h1>
    );
  }
}

export default App;
