import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service1 from '../Service1/Service1';

const Services = () => {
    const [servises2, setServices2] = useState([])
    useEffect(() => {
        fetch('./services2.JSON')
        .then(res => res.json())
        .then(data => setServices2(data))
    }, [])
    return (
        <Row xs={1} md={2} className="g-4">
        {
            servises2.map(service => <Service1 
            key = {service.key}
            service = {service}
            ></Service1>)
        }
    </Row>
    );
};

export default Services;