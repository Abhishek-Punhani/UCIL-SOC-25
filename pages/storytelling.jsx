import React from 'react';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Storytelling() {
  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
        Storytelling Page 📖
      </h1>

      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Hear the voices of people affected by UCIL’s actions.
      </p>

      <TestimonialCarousel />
    </div>
  );
}
