import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Success = (props) => {
    const {img, job, name, email} = props.success;
    return (
        <Col>
            <Card className = "card">
                <Card.Img className = "image" variant="top" src={img} />
                <Card.Body>
                <Card.Title>Name : {name} </Card.Title>
                <h5>Job : {job} </h5>
                <h6>Email : {email} </h6>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default Success;