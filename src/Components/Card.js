import React from "react";
import { ImLocation } from "react-icons/im"
import { Accordion } from "react-bootstrap";

const Card = (props) => {
    return ( 
        <section className="card-item" style={props.background}>
            <img src={props.imageUrl} alt={props.id} className="card-img"/>
            <div className="card-info " style={props.color}>
                <h3 className="card-title text-center mb-0 mt-4">{props.title}</h3>
                <h5 className="text-center sub-title">({props.sub})</h5>
                <p className="text-center location"><ImLocation className="location-icon"/>{props.location}</p> 
                <a href={props.googleMapsUrl} 
                        target="_blank" 
                        className="mapsUrl text-center"
                        rel="noreferrer">View on Google Maps</a>
            </div>
            <Accordion className="card-description">
                <Accordion.Item eventKey={props.id}>
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                    {props.description} <a className="more" href={props.moreInfo} target="_blank">More info --></a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
     );
}
 
export default Card;

