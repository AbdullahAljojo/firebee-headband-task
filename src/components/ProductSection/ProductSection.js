import React, { useRef } from 'react';
import Slider from 'react-slick';
import './ProductSection.css';
import PricingSection from '../PricingSection/PricingSection';

// Import images
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

// Import icons
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';

// Import feature icons
import icon11 from '../../assets/images/icon11.png';
import icon22 from '../../assets/images/icon22.svg';
import icon33 from '../../assets/images/icon33.svg';
import icon44 from '../../assets/images/icon44.svg';

const ProductSection = () => {
  const sliderRef = useRef(null);  // Create a reference for the main slider

  const settingsMain = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // Hiding the next and back icons
    dots: false,    // Hide default dots
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,  // Set autoplay speed to 3 seconds
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);  // Go to the clicked thumbnail's index
    }
  };

  return (
    <section className="product-section">
      {/* Left Column: Icons and Slider */}
      <div className="left-column">
        {/* Main Slider */}
        <div className="product-slider">
          <Slider {...settingsMain} ref={sliderRef}>
            <div>
              <img src={img1} alt="Image 1" />
            </div>
            <div>
              <img src={img2} alt="Image 2" />
            </div>
            <div>
              <img src={img3} alt="Image 3" />
            </div>
            <div>
              <img src={img4} alt="Image 4" />
            </div>
            <div>
              <img src={img5} alt="Image 5" />
            </div>
          </Slider>
        </div>

        {/* Icons ICNIRP and FCC above the slider */}
        <div className="product-icons">
          <img src={icon1} alt="ICNIRP" />
          <img src={icon2} alt="FCC" />
        </div>

        {/* Thumbnail Images Below the Slider */}
        <div className="thumbnail-slider">
          <img
            src={img1}
            alt="Thumbnail 1"
            onClick={() => handleThumbnailClick(0)}  // Set slide to index 0
          />
          <img
            src={img2}
            alt="Thumbnail 2"
            onClick={() => handleThumbnailClick(1)}  // Set slide to index 1
          />
          <img
            src={img3}
            alt="Thumbnail 3"
            onClick={() => handleThumbnailClick(2)}  // Set slide to index 2
          />
          <img
            src={img4}
            alt="Thumbnail 4"
            onClick={() => handleThumbnailClick(3)}  // Set slide to index 3
          />
          <img
            src={img5}
            alt="Thumbnail 5"
            onClick={() => handleThumbnailClick(4)}  // Set slide to index 4
          />
        </div>

        {/* Feature icons below thumbnails */}
        <div className="feature-icons">
          <div className="feature-item">
            <img src={icon11} style={{ width: '50px', height: '40px' }} alt="Free Shipping" />
            <p>Free Shipping within USA</p>
          </div>
          <div className="feature-item">
            <img src={icon33} alt="Customer Support" />
            <p>Signal Catalogue Updates Included</p>
          </div>
          <div className="feature-item">
            <img src={icon22} alt="Signal Catalogue Updates" />
            <p>Customer Support via E-mail, Phone, and Chat</p>
          </div>
          <div className="feature-item">
            <img src={icon44} alt="Signal Catalogue Updates" />
            <p>Lifetime Signal Catalogue Access</p>
          </div>
        </div>
      </div>

      {/* Right Column: Pricing Section */}
      <div className="right-column">
        <PricingSection />
      </div>
    </section>
  );
};

export default ProductSection;
