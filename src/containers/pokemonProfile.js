import React from 'react';
import { NavBar } from '../components/navBar';
import { MovesTabs } from '../components/movesTabs';
import { BaseStats } from '../components/baseStats';
import { Row, Col, Container } from 'reactstrap';
import './pokemonProfile.css'

const PokemonProfile = props => {
    const profileStats = props.profile.stats;//an array of stats objects
    const name = props.data[0]//lowered cased pokemon name
    const upperCase = name[0].toUpperCase();
    const lowerCase = name.slice(1);
    const pokeName = upperCase.concat('', lowerCase);
    const pokeTitle = props.data[1] + '  -  ' + pokeName;
    return <React.Fragment>
        <NavBar data={props.data} onClick={props.click} />
        <div>
            <Row className="float-right">
                <Col className="col-auto - variable width content" >
                    <h2 className="title" >{pokeTitle}</h2>
                </Col>
            </Row>
        </div>

        <BaseStats profileData={profileStats}></BaseStats>
        <MovesTabs movesData={props.movesData} onClick={props.movesclick} />
    </React.Fragment>
}

export { PokemonProfile }

