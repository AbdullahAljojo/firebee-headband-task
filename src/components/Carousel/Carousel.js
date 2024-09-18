import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

// استيراد الصور من مجلد assets
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

const Carousel = () => {
  const settingsMain = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,  // عرض الأسهم للتنقل بين الصور
    dots: true,    // عرض النقاط أسفل السلايدر
  };

  return (
    <div className="carousel">
      <Slider {...settingsMain}>
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
  );
};

export default Carousel;
