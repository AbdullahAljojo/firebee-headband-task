import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductSection from './components/ProductSection/ProductSection';
import Signals from './components/Signals/Signals';
import ProductScreen from './components/ProductScreen/ProductScreen';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="product-section">
          <ProductSection />
        </section>
        <section id="signals-section">
          <Signals />
        </section>
        <section id="reviews">
          <ProductScreen />
        </section>
        <section id="faq-section">
          <FaqSection />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default App;
