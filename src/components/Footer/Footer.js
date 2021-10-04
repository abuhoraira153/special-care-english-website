import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faShoppingCart,faAddressBook, faVideoSlash,} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Footer = () => {
    const icon1 = <FontAwesomeIcon icon={faSchool} />
    const icon2 = <FontAwesomeIcon icon={faShoppingCart} />
    const icon3 = <FontAwesomeIcon icon={faAddressBook} />
    const icon4 = <FontAwesomeIcon icon={faVideoSlash} />
    
    return (
        <div className = "row footer">
            <div className="col-lg-6 copy-right">
                <p className = "small mb-0 mt-1">&copy; Copy-right Abu Horaira</p>
            </div>
            <div className="col-lg-6 d-flex icons">
                <h4>{icon1}</h4>
                <h4>{icon2}</h4>
                <h4>{icon3}</h4>
                <h4>{icon4}</h4>
                <Link className = "lern-more" to = "/services">Learn More...</Link>
            </div>
        </div>
    );
};

export default Footer;