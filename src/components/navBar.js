import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = props => {
    const upperCase = props.data[0].toUpperCase();
    const lowerCase = props.data.slice(1);
    const pokeName = upperCase.concat('', lowerCase);
    return <div>
        <Nav>
            <NavItem onClick={e => props.onClick()}>
                <NavLink className="text-muted" href="#">Home > ></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-danger" disabled href="#">{pokeName}</NavLink>
            </NavItem>
        </Nav>
    </div>
}

export { NavBar };