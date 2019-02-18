import React from 'react';
import { Jumbotron, Input } from 'reactstrap';
import './header.css';
import pokeball from '../pokeball.png';

const Header = (props) => {
    return (
        <div className='container'>
            <div className='row red'>
            </div>
            <img src={pokeball} alt="sprite" className="imgLeft"></img>
            <Jumbotron className='jumbotron'>
                <h4 className="display-5 header">Pursuit Pokedex</h4>
            </Jumbotron>
            <Input placeholder="Search..." className="input" />
            <img src={pokeball} alt="sprite" className="imgRight"></img>
            <br />
            <hr></hr>
        </div>
    )
}

export default Header;