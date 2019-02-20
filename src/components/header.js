import React from 'react';
import { Jumbotron, Input } from 'reactstrap';
import './header.css';
import pokeball from '../pokeball.png';

const Header = (props) => {

    // handleSearch = (props) => {
        // console.log("1 props")
        // console.log(props.target.value)
        // const { searchInput, suggestions } = this.state;
        // this.setState({ searchInput: props })
        // console.log('2 props saved to state')
        // const pokeMatches = pokeSuggestions.filter(searchInput => pokeSuggestions.toLowerCase().includes(searchInput).toLowerCase())
        // console.log('3 filtered')
        // return <div class="dropdown-menu">
        //     <span class="dropdown-item-text"></span>
        // </div>
    // }

    const title = props.data;
    console.log(props)
    return (
        <div className='container'>
            <div className='row'>
            </div>
            <img src={pokeball} alt="sprite" className="imgLeft"></img>
            <Jumbotron className='jumbotron'>
                <h4 className="display-5">{title}</h4>
            </Jumbotron>
            <Input placeholder="Search..." className="input" onChange={props.handleSearch}/>
            <img src={pokeball} alt="sprite" className="imgRight"></img>
            <br />
            <hr></hr>
        </div>
    )
}

export { Header } ;