import React from 'react';
import CustomLink from '../CustomLink/CustomLInk';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1>T-Shirt</h1>
            <div className='navbar'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to ='/orderreview'>Order Review</CustomLink>

            </div>
        </nav>
    );
};

export default Header;