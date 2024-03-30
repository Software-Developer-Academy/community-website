//@ts-ignore
import React from "react"
import logoImage from '@assets/logo/sda-pro-logo-1024x1024.png';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar" data-testid="navbar">
            <div className="navbar-logo">
                <img src={logoImage} alt="Logo"/>
            </div>
            <div className="navbar-text">
                <p>Software Developer Academy Pro</p>
                <h4>Members' Index</h4>
            </div>
        </nav>
    );
};

export default Navbar;
