import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green",
      };
    return (
        <nav className = "header">
            <NavLink className = "header-child" to = "/home" activeStyle={activeStyle}>Home</NavLink>
            <NavLink className = "header-child" to = "/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink className = "header-child" to = "/services" activeStyle={activeStyle}>Services</NavLink>
            <NavLink className = "header-child" to = "/success" activeStyle={activeStyle}>Our Success</NavLink>
        </nav>
    );
};

export default Header;