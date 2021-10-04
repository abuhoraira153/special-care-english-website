import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Success from '../Success/Success';

const OurSucces = () => {
    const [successes, setSuccesses] = useState([])
    useEffect(() => {
        fetch('./successes.JSON')
        .then(res => res.json())
        .then(data => setSuccesses(data))
    }, [])
    return (
        <Row xs={1} md={2} className="g-4">
        {
            successes.map(success => <Success
                key = {success.id} 
                success = {success}
                ></Success>  )
        }
    </Row>
    );
};

export default OurSucces;