import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'> 
      <div className='footer-logo'>
        <Link to='/' className='social-logo'>
          Spirit11
        </Link>
      </div>
      <h1 className='footer-subscription-heading'>
        Join The Gentleman's Game
      </h1>
      <small className='website-rights'>Pixel Pushers © 2025</small>
      <h1 className='moraspirit'>Mora spirit</h1> 
    </div>
  );
}

export default Footer;
