import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'> 
      <section></section>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join for the  The Gentlemans Game
        </p>
      </section>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Spirit11
              <i class='fas fa-ball' />
            </Link>
          </div>
          <small class='website-rights'>Pixel Pushers © 2025</small>
        </div>
  );
}

export default Footer;