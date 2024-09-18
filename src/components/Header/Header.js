import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.svg'; // Firebee Logo
import personIcon from '../../assets/images/person.png'; // Person Icon
import menuIcon from '../../assets/images/menu-icon.svg'; // Menu Icon for mobile
import appbarImage from '../../assets/images/appbar.png'; // Background banner image

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the mobile menu

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Enable smooth scroll
        block: 'start' // Scroll to the top of the section
      });
    }
    if (isMobile) {
      setMenuOpen(false); // Close the menu after selecting a link on mobile
    }
  };

  return (
    <>
      {/* Banner Section */}
      <div className="top-banner">
        <img src={appbarImage} alt="Black Friday Sale Banner" className="banner-image" />
        {isMobile ? 
        <div className="banner-text">Black Friday Sale  Save $100</div> : 
        <div className="banner-text">Black Friday Sale - Save $100</div>}
      </div>

      {/* Main Header Section */}
      <header className="header">
        
        <div className="logo">
          <img src={logo} alt="Firebee Logo" />
        </div>
        {!isMobile && (
          <nav>
            <ul>
              <li><a onClick={() => scrollToSection('#product-section')}>How It Works</a></li>
              <li><a onClick={() => scrollToSection('#signals-section')}>Signals</a></li>
              <li><a onClick={() => scrollToSection('#reviews')}>Reviews</a></li>
              <li><a onClick={() => scrollToSection('#faq-section')}>FAQ</a></li>
            </ul>
          </nav>
        )}
        <div className="header-actions">
          <button className="buy-now">Buy Now</button>
          {isMobile ? (
            <img className="menu-icon" src={menuIcon} alt="Menu Icon" onClick={toggleMenu} />
          ) : (
            <img className="person-icon" src={personIcon} alt="Person Icon" />
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a onClick={() => scrollToSection('#product-section')}>How It Works</a></li>
            <li><a onClick={() => scrollToSection('#signals-section')}>Signals</a></li>
            <li><a onClick={() => scrollToSection('#reviews')}>Reviews</a></li>
            <li><a onClick={() => scrollToSection('#faq-section')}>FAQ</a></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
