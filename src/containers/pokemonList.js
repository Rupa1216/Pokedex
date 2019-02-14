import React from 'react';
import { Pokemon } from '../components/pokemon';
import {
    ListGroup,
  } from 'reactstrap';
import './pokemonList.css';

const PokemonList = props => {
    return <ListGroup className='col-sm-12 col-md-6 offset-md-3'>
        <Pokemon className= 'pokeRow' data={props.data} onClick={props.click} />
    </ListGroup>
}





export  {PokemonList};