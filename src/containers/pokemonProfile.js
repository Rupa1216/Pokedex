import React from 'react';
import {NavBar} from '../components/navBar';

const PokemonProfile = props => {
    console.log('profile', props)
    return <React.Fragment>
        <NavBar data={props.data} onClick={props.click}/>
        <h1>{props.data}'s Profile!</h1>
    </React.Fragment>
}

export { PokemonProfile };

