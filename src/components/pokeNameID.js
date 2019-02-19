import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './pokeNameID.css'

const PokeNameID = props => {
    const name = props.data[0]//lowered cased pokemon name
    const upperCase = name[0].toUpperCase();
    const lowerCase = name.slice(1);
    const pokeName = upperCase.concat('', lowerCase);
    const pokeTitle = props.data[1] + '  -  ' + pokeName;

    return <>
        <Container className="container">
            <div className="clearfix">
                <Row className="float-right">
                    <Col className="col-auto - variable width content"  >
                        <h2>{pokeTitle}</h2>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
}


export { PokeNameID };