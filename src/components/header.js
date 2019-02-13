import React from 'react';
import './header.css';
import { Input } from 'reactstrap';

const Header = (props) => {
    return (
        <div>

            {/* <InputGroup> */}
            {/* <InputGroupAddon addonType="prepend">@</InputGroupAddon> */}
            <Input placeholder="Search..." />
            {/* </InputGroup> */}
            <br />
        </div>
    )
}

export default Header;