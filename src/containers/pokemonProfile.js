import React from 'react';
import { NavBar } from '../components/navBar';
import { MovesTabs } from '../components/movesTabs'
import { Row, Col } from 'reactstrap';
import './pokemonProfile.css'

const PokemonProfile = props => {
    const name = props.data[0]
    const upperCase = name[0].toUpperCase();
    const lowerCase = name.slice(1);
    const pokeName = upperCase.concat('', lowerCase);
    const pokeTitle = props.data[1] + '  -  ' + pokeName;
    return <React.Fragment>
        <NavBar data={props.data} onClick={props.click} />

        <Row className="float-right">
            <Col className="col-auto - variable width content" >
                <h2 className="title" >{pokeTitle}</h2>
            </Col>
        </Row>

        <MovesTabs movesData={props.movesData} onClick={props.movesclick} />
    </React.Fragment>
}

export { PokemonProfile };

