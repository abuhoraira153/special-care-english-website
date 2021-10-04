import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faAddressBook, faAddressCard} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const icon1 = <FontAwesomeIcon icon={faShoppingCart} />
    const icon2 = <FontAwesomeIcon icon={faAddressBook} />
    const icon3 = <FontAwesomeIcon icon={faAddressCard} />
    
    return (
        <div className = "row footer">
            <div className="col-lg-6 copy-right">
                <p className = "small mb-0 mt-1">&copy; Copy right Abu Horaira</p>
            </div>
            <div className="col-lg-6 d-flex icons">
                <h4>{icon1}</h4>
                <h4>{icon2}</h4>
                <h4>{icon3}</h4>
            </div>
            
        </div>
    );
};

export default Footer;