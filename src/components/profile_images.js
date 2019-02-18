import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './profile_images.css'

const PokeImages = props => {
    console.log(props.profileImages)//an array of stats objects
    const images = props.profileImages;
    const pokeName = props.data[0];//name is the first index of the array 

    return <>
        <div>
            <Container fluid>
               
                <div className="stat">
                    <Row form>
                        <h2>images</h2>
                    </Row>
                </div>
            </Container>

        </div>
    </>

}


export { PokeImages };