import React from 'react';
import { Button } from 'reactstrap';
import './moveTabs.css'

const MovesTabs = props => {
    const { movesData, onClick } = props;
    console.log(movesData);

    return <div className="moves-containair">
        <h2>Moves</h2>
        {movesData.map((move, index) => {
            return < Button className="button" outline color="secondary" onClick={e => onClick(index)} key={index}> {move} </Button>
        })}
    </div>
}


export { MovesTabs };