import React from 'react';
import { NavBar } from '../components/navBar';
import { MovesTabs } from '../components/movesTabs'

const PokemonProfile = props => {
    console.log('profile', props)
    return <React.Fragment>
        <NavBar data={props.data} onClick={props.click} />
        <h1>{props.data}'s Profile!</h1>
        <MovesTabs movesData={props.movesData} onClick={props.movesclick} />
    </React.Fragment>
}

export { PokemonProfile };

