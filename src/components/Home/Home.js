import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service1 from '../Service1/Service1';

const Home = () => {
    const [servises1, setServices1] = useState([])
    useEffect(() => {
        fetch('./services1.JSON')
        .then(res => res.json())
        .then(data => setServices1(data))
    }, [])
    return (
    <Row xs={1} md={2} className="g-4">
        {
            servises1.map(service => <Service1
                key = {service.key} 
                service = {service}
                ></Service1>  )
        }
    </Row>
            
        
    );
};

export default Home;