import React from 'react'
import { Carousel } from 'react-bootstrap'
const Carousels = () => {
    const carouselImage = [
        {url: "CaroDog1.jpg", id:1},
        {url: "CaroDog2.jpg", id: 2},
        {url: "CaroDog3.jpg", id: 3}
    ]

    const carouselElements = carouselImage.map(image=>{ 
        return <Carousel.Item className="item" key={image.id}>
                    <img
                        className="d-block"
                        alt="Slides"
                        src={process.env.PUBLIC_URL + `/${image.url}`}
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h1 className="display-1 fw-bolder">Dog Love Shelter</h1>
                        <h3>Happiness is a warm puppy</h3>
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