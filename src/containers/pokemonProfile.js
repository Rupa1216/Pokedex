import React from 'react';
import { NavBar } from '../components/navBar';
import { PokeNameID } from '../components/pokeNameID';
import { PokeImages } from '../components/profile_images';
import { BaseStats } from '../components/baseStats';
import { MovesTabs } from '../components/movesTabs';
import './pokemonProfile.css'

const PokemonProfile = props => {
    const profileStats = props.profile.stats;//an array of stats objects
    const profileImages = Object.values(props.profile.sprites); //array of urls from sprites for images
    //props.data is the array with poke name and poke number
    return <React.Fragment>
        <NavBar data={props.data} onClick={props.click} />
        <PokeNameID data={props.data}></PokeNameID> 
        <PokeImages imagesData={profileImages} data={props.data} />
        <BaseStats profileData={profileStats}></BaseStats>
        <MovesTabs movesData={props.movesData} onClick={props.movesclick} />
    </React.Fragment>
}

export { PokemonProfile }

