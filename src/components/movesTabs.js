import React from 'react';
import { Button } from 'reactstrap';
import './moveTabs.css'

const MovesTabs = props => {
    const { movesData, onClick } = props;
    
    return <div className="moves-containair">
        <h2>Moves</h2>
        {movesData.map((move, index) => {
            return < Button className="button" outline color="secondary" onClick={e => onClick(index)} key={index}> {move} </Button>
            //the onClick function is passing the index of the move name, may need to actually pass the info that the modal will display, but right now the moves info is not being collected anywhere
        })}
    </div>
}


export { MovesTabs };