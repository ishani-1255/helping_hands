import React from 'react';
import './NavBar.css'; 
import Logo from "./Logo.png";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src = {Logo} alt="Your Logo"/>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/causes">Causes</a></li>
                <li><a href="/organizations">Organizations</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/donate">Donate</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;

