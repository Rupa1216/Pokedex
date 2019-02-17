import React from 'react';
import './baseStats.css'

const BaseStats = props => {
    console.log(props.profileData)//an array of stats objects
    const stats = props.profileData[0].base_stat;

    return <div>
        <p>{stats}</p>

    </div>
}


export { BaseStats };