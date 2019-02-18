import React from 'react';
import { Col, Row } from 'reactstrap';
import './profile_images.css'

const PokeImages = props => {
    console.log(props.imagesData)//an array of stats objects
    const imagesArr = props.imagesData;//array of images url
    const pokeName = props.data[0];//name is the first index of the array 
    const lgImage = `https://img.pokemondb.net/artwork/${pokeName}.jpg`;
    return <>
        <div>
            <img src={lgImage} alt={pokeName} />
            <div className="images">
                <Row form>
                    {imagesArr.map((image, index) => {
                        if (image !== null) {
                            return <>
                                <Col xs="auto" key={index}>
                                    <img src={image} alt={index} />
                                </Col>
                            </>
                        }
                    })}
                </Row>
                <h6 className="image-text">Default</h6>
            </div>
        </div>
    </>
}


export { PokeImages };