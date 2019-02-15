import React from 'react';
import { Jumbotron, Input } from 'reactstrap';
import './header.css';


const Header = (props) => {
    return (
        <div className='container'>
            <div className='row red'>
            </div>
            <Jumbotron className='jumbotron'>
                <h5 className="display-5 header">Pursuit Pokedex</h5>
            </Jumbotron>
            <Input placeholder="Search..." className="input" />
            <br />
            <hr></hr>
        </div>
    )
}

export default Header;