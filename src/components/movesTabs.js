import React from 'react';
import { Button } from 'reactstrap';

const MovesTabs = props => {
    const moves = props.movesData;
    console.log(moves);
    return (
        <div>
            <Button outline color="secondary">{moves} </Button>{' '}
        </div>
    )
}

export { MovesTabs };