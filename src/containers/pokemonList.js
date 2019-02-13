import React from 'react';
import './pokemonList.css';
import { Pokemon } from '../components/pokemon';

import {
    ListGroup,
  } from 'reactstrap';

const PokemonList = props => {
    return <ListGroup>
        <Pokemon className= 'pokeRow' data={props.data} onClick={props.click} />
    </ListGroup>
}





export  {PokemonList};