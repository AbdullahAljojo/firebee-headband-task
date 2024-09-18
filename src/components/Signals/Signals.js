// src/components/Signals/Signals.js
import React from 'react';
import './Signals.css';
import moneyBackImage from '../../assets/images/30days.png'; // 30 Day Money Back Guarantee
import waveImage from '../../assets/images/wave.png'; // Wave background
import bedtimeImage from '../../assets/images/Bedtime.png';
import deepSleepImage from '../../assets/images/DeepSleep.png';
import relaxImage from '../../assets/images/Relax.png';
import calmImage from '../../assets/images/Calm.png';
import focusImage from '../../assets/images/Focus.png';
import happyImage from '../../assets/images/Happy.png';
import alertImage from '../../assets/images/Alert.png';
import firebeeIcon from '../../assets/images/iconFirebee.png';

const Signals = () => {
  return (
    <section className="signals-section">
      {/* 30 Day Money Back Guarantee */}
      <div className="money-back-guarantee">
        <img src={moneyBackImage} alt="30 Day Money Back Guarantee" className="guarantee-image" />
        <div className="guarantee-text">
          <h2>30 Day Money Back Guarantee</h2>
          <p>
          At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason if you are not satisfied with your Firebee headband we will happily refund your purchase.
          </p>
        </div>
      </div>

      {/* Firebee Signals Section */}
      <div className="signals">
        <div className="signal-title-row">
          <div className="wave-top-left">
            <img src={waveImage} alt="Wave Top Left" />
          </div>
          <div className="signal-title">
            <h2>Firebee Signals</h2>
            <p>A signal for every situation</p>
          </div>
        </div>

        <div className="signals-grid">
          <div className="signal-card">
            <img src={bedtimeImage} alt="Bedtime" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card">
            <img src={deepSleepImage} alt="Deep Sleep" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card">
            <img src={relaxImage} alt="Relax" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card">
            <img src={calmImage} alt="Calm" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card">
            <img src={focusImage} alt="Focus" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card">
            <img src={happyImage} alt="Happy" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card">
            <img src={alertImage} alt="Alert" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="signal-card-logo">
            <img src={firebeeIcon} alt="Firebee Icon" />
            <p>Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.</p>
          </div>
          <div className="wave-bottom-right">
          <img src={waveImage} alt="Wave Bottom Right" />
        </div>
        </div>

        {/* Wave at the bottom right */}
     
      </div>
      
    </section>
  );
};

export default Signals;
