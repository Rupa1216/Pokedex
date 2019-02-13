import React from 'react';
import {
    Col,
    Row,
    ListGroupItem,
} from 'reactstrap';
import './pokemon.css';

const Pokemon = props => {
    const {data} = props;
    console.log(data)
    return <>
        {data.map((item, index) => {
            const imageSrc = `https://img.pokemondb.net/sprites/sun-moon/icon/${item.name}.png`;
            const imageNum = index + 1
            return <ListGroupItem key={index} onClick={e => props.onClick(index)}>                
                
                
                <Row>
                
                <img src= {imageSrc} alt={index}/>
               
                <Col>
                    {item.name}
                    
                </Col>
                <Col>
                    #{imageNum}
                </Col>
                </Row>
                
                            
            </ListGroupItem>
        })}
    </>
}



export {Pokemon};
