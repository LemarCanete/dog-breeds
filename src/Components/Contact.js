import { Col, Row } from "react-bootstrap"
import ContactData from "../Data/ContactData"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
export default function Contact(){
    const contact = ContactData.map(contact =>{
        return <Col>
                    <h3>{contact.heading}</h3> 
                    <p>{contact.para1}</p>
                    <p>{contact.para2}</p>
                    <p>{contact.para3}</p>
                    <p>{contact.para4}</p>
                    <p>{contact.para5}</p>
                    <p>{contact.para6}</p>
                </Col>
    })
    return (
        <div className="contact" id="contact">
            <h1 className="display-1 text-center p-5 fw-bolder">Contact us</h1>
            <Row className="pt-5">
                {contact}
            </Row>
            <Row className="pb-5">
                <div className="icons">
                    <FaFacebook className="fs-1"/>
                    <SiGmail className="fs-1" />
                    <FaTwitter  className="fs-1" />
                </div>
            </Row>
        </div>
    )
}