import React from 'react';
import './PricingSection.css';
import subtractIcon from '../../assets/images/Subtract.png'; // Most Popular Kit badge
import ratingIcon from '../../assets/images/star1.png'; // Star rating
import arrowRight from '../../assets/images/arrow_right.png'; // Arrow for Buy Now button
import visaIcon from '../../assets/images/visa.svg'; // Visa icon
import masterIcon from '../../assets/images/master.svg'; // MasterCard icon
import expressIcon from '../../assets/images/express.svg'; // American Express icon
import maestroIcon from '../../assets/images/maestro.svg'; // Maestro icon
import paypalIcon from '../../assets/images/paypal.svg'; // PayPal icon
import affirmIcon from '../../assets/images/affirm.svg'; // Affirm icon
// Import feature icons
import icon11 from '../../assets/images/icon11.png';
import icon22 from '../../assets/images/icon22.svg';
import icon33 from '../../assets/images/icon33.svg';
import icon44 from '../../assets/images/icon44.svg';
const PricingSection = () => {
  return (
    <section className="pricing-section">
      {/* Firebee Headband Header */}
      <div className="pricing-header">
        <h1>Firebee Headband</h1>
        <div className="badges">
          <div className="badges-row">
            <img src={ratingIcon} alt="ICNIRP Certified" />
            <p1>267 Reviews</p1>
          </div>
          <p>Order today and receive your Firebee by June 15th, 2021</p>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="pricing-table">
        {/* Firebee Starter Kit */}
        <div className="pricing-card starter-kit">
          <div className="pricing-header-table">
            <h3>Firebee Starter Kit</h3>
            <div className="pricing-info">
              <span className="old-price">$999.00</span>
              <span className="new-price">$379.00</span>
            </div>
          </div>

          <div className="most-popular-badge">
            <span>MOST POPULAR KIT</span>
          </div>

          <ul className="feature-list">
            <li>
              <img src={subtractIcon} alt="icon" className="list-icon" />
              Access to 7 signals (and future signal releases)
            </li>
            <li>
              <img src={subtractIcon} alt="icon" className="list-icon" />
              Firebee Headband
            </li>
            <li>
              <img src={subtractIcon} alt="icon" className="list-icon" />
              $19/month membership, first 2 months free
            </li>
            <li>
              The starter kit is the most affordable way to get started with Firebee. Pay $299 for the Firebee headband and access to the entire Firebee Signal Catalogue for only $19 a month.
              <strong> Membership can be cancelled anytime. No contracts. Satisfaction guaranteed.</strong>
            </li>
          </ul>
        </div>

        {/* Founder's Kit */}
        <div className="pricing-card founders-kit">
          <div className="pricing-header-table">
            <h3>Founder's Kit</h3>
            <div className="pricing-info">
              <span className="new-price">$799.00</span>
            </div>
          </div>

          <ul className="feature-list">
            <li>
              <img src={subtractIcon} alt="icon" className="list-icon" />
              Access to 7 signals (and future signal releases)
            </li>
            <li>
              <img src={subtractIcon} alt="icon" className="list-icon" />
              Firebee Headband
            </li>
            <li>
              <img src={subtractIcon} alt="icon" className="list-icon" />
              No Monthly Membership
            </li>
          </ul>

          <p className="founders-description">
            The Founders kit allows you to get the Firebee headband and lifetime access to the entire Firebee Signal Catalogue for a one-time payment. The Founders kit can be paid through Affirm allowing customers to make small payments of $73 a month.
          </p>
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="buy-now-section-button">
        <button className="buy-now-button">
          <span> Add to Cart </span>
          <img src={arrowRight} alt="Arrow Right" />
        </button>
      </div>

      {/* Payment Icons */}
      <div className="payment-icons">
        <img src={visaIcon} alt="Visa" />
        <img src={masterIcon} alt="MasterCard" />
        <img src={expressIcon} alt="American Express" />
        <img src={maestroIcon} alt="Maestro" />
        <img src={paypalIcon} alt="PayPal" />
        <img src={affirmIcon} alt="Affirm" />
      </div>

      <div className="feature-icons2">
          <div className="feature-item2">
            <img src={icon11} style={{ width: '50px', height: '40px' }} alt="Free Shipping" />
            <p>Free Shipping within USA</p>
          </div>
          <div className="feature-item2">
            <img src={icon33} alt="Customer Support" />
            <p>Signal Catalogue Updates Included</p>
          </div>
          <div className="feature-item2">
            <img src={icon22} alt="Signal Catalogue Updates" />
            <p>Customer Support via E-mail, Phone, and Chat</p>
          </div>
          <div className="feature-item2">
            <img src={icon44} alt="Signal Catalogue Updates" />
            <p>Lifetime Signal Catalogue Access</p>
          </div>
        </div>
    </section>
  );
};

export default PricingSection;
