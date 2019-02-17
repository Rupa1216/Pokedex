import React from 'react';
import { NavBar } from '../components/navBar';
import { MovesTabs } from '../components/movesTabs';
import { PokeNameID } from '../components/pokeNameID'
import { BaseStats } from '../components/baseStats';
import './pokemonProfile.css'

const PokemonProfile = props => {
    const profileStats = props.profile.stats;//an array of stats objects
    return <React.Fragment>
        <NavBar data={props.data} onClick={props.click} />
        <PokeNameID data={props.data}></PokeNameID>     
        <BaseStats profileData={profileStats}></BaseStats>
        <MovesTabs movesData={props.movesData} onClick={props.movesclick} />
    </React.Fragment>
}

export { PokemonProfile }

