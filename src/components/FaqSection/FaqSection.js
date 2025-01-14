// src/components/FaqSection/FaqSection.js
import React, { useState } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is Firebee Safe?',
      answer: (
        <>
          Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is <strong>3000x less powerful</strong> than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety.
        </>
      ),
    },
    {
      question: 'How Does Firebee work?',
      answer: (
        <>
          Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state. <br /><br />
          Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.<br /><br />
          Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband.
        </>
      ),
    },
    {
      question: 'Will Firebee Fit on My Head?',
      answer: 'Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.',
    },
    {
      question: 'What If I want the signal to stop?',
      answer: 'Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.',
    },
    {
      question: 'How do you charge Firebee?',
      answer: 'Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in.',
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
