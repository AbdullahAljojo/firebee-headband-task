import React from 'react';
import './Footer.css';
import youtubeIcon from '../../assets/images/youtube.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import pinterestIcon from '../../assets/images/p.svg';
import footerLogo from '../../assets/images/footer_logo.png';
import buttombar from '../../assets/images/buttombar.png';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Gradient border at the top */}
      <div className="footer-gradient-border"></div>

      {/* Top Section of the Footer */}
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#activate">Activate</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h5>Find Us On</h5>
          <div className="social-icons">
            <a href="#youtube"><img src={youtubeIcon} alt="YouTube" /></a>
            <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#facebook"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="#pinterest"><img src={pinterestIcon} alt="Pinterest" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section of the Footer */}
      <div className="footer-bottom-image">
      <div className="footer-bottom">
        <div className="footer-logo-wrapper">
          <img src={footerLogo} alt="Firebee Logo" className="footer-logo" />
        </div>
        <p>Copyright © 2024 Firebee Technologies, Inc. All rights reserved.</p>
        <p className="disclaimer">
          The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
