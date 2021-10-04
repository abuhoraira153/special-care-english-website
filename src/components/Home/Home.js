import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service1 from '../Service1/Service1';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [servises1, setServices1] = useState([])
    const icon = <FontAwesomeIcon icon={faCircle} />
    useEffect(() => {
        fetch('./services1.JSON')
        .then(res => res.json())
        .then(data => setServices1(data))
    }, [])
    return (
        <div>
            <div className = "educare">
                <h1>Specialcare</h1>
                <h3>Management System</h3>
                <div>
                    <p> {icon} Full Responsive</p>
                    <p> {icon} Bootstrap 5.0.2</p>
                    <p> {icon} Well Organized</p>
                    <p> {icon} Online Learning</p>
                </div>
                
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    servises1.map(service => <Service1
                        key = {service.key} 
                        service = {service}
                        ></Service1>  )
                }
            </Row>
        </div>
    
            
        
    );
};

export default Home;