import React from 'react'
import { Carousel } from 'react-bootstrap'
const Carousels = () => {
    const carouselImage = ["CaroDog1.jpg", "CaroDog2.jpg", "CaroDog3.jpg"]
    const carouselElements = carouselImage.map(image=>{ 
        return <Carousel.Item className="item">
                    <img
                        className="d-block"
                        src={image}
                        alt="Slides"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h1 className="display-1 fw-bolder">Dog Love Shelter</h1>
                        <h3>Happines is a warm puppy</h3>
                    </Carousel.Caption>
                </Carousel.Item>
    })
    return ( 
        <header id="home">
    <Carousel fade className="carousel">
        {carouselElements}
    </Carousel>
    </header>
        );
    }
 
export default Carousels;