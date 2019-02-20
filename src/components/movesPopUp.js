import React from 'react';
import './movesPopUp.css';

  //toggles page view and also calls second API with profile info
  movesPopUp = (index, pokeNum) => {
    if (this.state.homepage === false) {
      const currentMove = this.state.pokeList[move].name;
      const moveDesc = [type, power, PP]; //move characteristics that appear in modal
      const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${pokeName}`; //this API gets the profile info
      fetch(pokemonAPI)
        .then(res =>
          res.json()
        )
        .then(res => {
          const profileData = res //the whole object from API
          const movesArr = res.moves; //an array of objects
          const currentMoveArr = []; //array of just moves names
          for (let i = 0; i < movesArr.length; i++) {
            let moveName
             = movesArr[i].move.name;
            newMovesArr.push(moveName);
          }
          return { newMovesArr: newMovesArr, profileData: profileData } //an object has to be return to be able to pass multiple values
        })
        .then(res => {
          console.log(res.profileData)
          this.setState({ currentMove: res.currentMovesArr, homepage: false, pokeNameNum: pokeNameID, pokeProfile: res.profileData })
        })

    } else {
      this.setState({ homepage: true });
    }
  }
const MovesPopUp = (props) => { // (changeState, offest, results)
    const { movesData, onClick } = props;
    return <><Button onClick = {e => props.onClick()}>Moves</Button></>




}
 
export { MovesPopUp };

