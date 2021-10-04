import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service1.css'
const Service1 = (props) => {
    const {name, price, img} = props.service;
    return (
        <div>
            <Col>
            <Card className = "card">
                <Card.Img className = "image" variant="top" src={img} />
                <Card.Body>
                <Card.Title>Course-name : {name} </Card.Title>
                <h4>Course-price : $ {price} </h4>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Service1;