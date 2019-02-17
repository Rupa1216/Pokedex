import React from 'react';
import { Button } from 'reactstrap';
import './moveTabs.css'

const MovesTabs = props => {
    const { movesData, onClick } = props;
    
    return <div className="moves-containair">
        <h2>Moves</h2>
        {movesData.map((move, index) => {
            //lowered case move name
            const upperCase = move[0].toUpperCase();
            const lowerCase = move.slice(1);
            const moveName = upperCase.concat('', lowerCase);
            return < Button className="button" outline color="secondary" onClick={e => onClick(index)} key={index}> {moveName} </Button>
            //the onClick function is passing the index of the move name, may need to actually pass the info that the modal will display, moves info is in the pokeProfile
        })}
    </div>
}


export { MovesTabs };