import React from 'react';
import { Button } from 'reactstrap';

const MovesTabs = props => {
    const { movesData, onClick } = props;
    console.log(movesData);

    return <div>
        {movesData.map((move, index) => {
            return < Button outline color="secondary" onClick={e => onClick(index)} key={index}> {move} </Button>
        })}
    </div>
}


export { MovesTabs };