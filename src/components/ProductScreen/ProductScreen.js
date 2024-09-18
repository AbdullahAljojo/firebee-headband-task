// src/components/ProductScreen/ProductScreen.js
import React, { useState, useEffect } from 'react';
import './ProductScreen.css';
import womanWithHeadband from '../../assets/images/woman_with_headband.png'; // صورة المرأة مع Firebee
import boxContents from '../../assets/images/box_contents.png'; // صورة محتويات الصندوق
import checkIcon from '../../assets/images/Subtract.png'; // أيقونة علامة التحقق
import im1 from '../../assets/images/im1.png'; // أيقونة علامة التحقق
import im2 from '../../assets/images/im2.png'; // أيقونة علامة التحقق
import im3 from '../../assets/images/im3.png'; // أيقونة علامة التحقق
import im4 from '../../assets/images/im4.png'; // أيقونة علامة التحقق
import im5 from '../../assets/images/im5.png'; // أيقونة علامة التحقق
import im6 from '../../assets/images/im6.png'; // أيقونة علامة التحقق

const ProductScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="product-screen">
      {/* Title and Subtitle */}
      {isMobile && (
          <img
            src={womanWithHeadband}
            alt="Woman wearing Firebee Headband"
            className="woman-image"
          />
        )}
      <div className="product-header">
        <h1>What will Firebee do for me?</h1>
        <p>Firebee will help you gently nudge yourself into a different mental state</p>
      </div>

      {/* Image and Benefits */}
      <div className="benefits-section">
        {!isMobile && (
          <img
            src={womanWithHeadband}
            alt="Woman wearing Firebee Headband"
            className="woman-image"
          />
        )}
        <ul className="benefits-list">
          <li>
            <img src={checkIcon} alt="Check" /> Can't sleep? Turn on the{' '}
            <span className="highlight">deep sleep</span> signal
          </li>
          <li>
            <img src={checkIcon} alt="Check" /> Feeling tired? Turn on the{' '}
            <span className="highlight alert">alert</span> signal
          </li>
          <li>
            <img src={checkIcon} alt="Check" /> Feeling anxious? Turn on the{' '}
            <span className="highlight calm">calm</span> signal
          </li>
          <li>
            <img src={checkIcon} alt="Check" /> Feeling unproductive? Turn on
            the <span className="highlight focus">focus</span> signal
          </li>
          <li>
            <img src={checkIcon} alt="Check" /> Feeling blue? Turn on the{' '}
            <span className="highlight happy">happy</span> signal
          </li>
        </ul>
      </div>

      {/* Box Contents */}
      <div className="box-section">
        <h2>What’s in the box?</h2>
        <img src={boxContents} alt="What's in the box" className="box-image" />

        {/* Featured logos */}
        <div className="featured-logos">
          <span>FEATURED ON</span>
          <div className="logos">
            <img src={im1} alt="GQ" />
            <img src={im2} alt="The Guardian" />
            <img src={im3} alt="The New York Times" />
            <img src={im4} alt="Mashable" />
            <img src={im5} alt="CNN" />
            <img src={im6} alt="Wall Street Journal" />
          </div>
          <div class="divider"></div>
        </div>

        {/* Box items */}
        <div className="box-items">
          <div>
            <img src={checkIcon} alt="Check" /> 1 Firebee headband
          </div>
          <div>
            <img src={checkIcon} alt="Check" /> 1 Charging cable
          </div>
          <div>
            <img src={checkIcon} alt="Check" /> 1 User manual
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
