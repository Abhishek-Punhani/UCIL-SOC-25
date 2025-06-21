import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Sita',
    message: 'Our water has been yellow for months. We need clean water.',
  },
  {
    name: 'Ram',
    message: 'My kids are falling sick. We have no health support.',
  },
  {
    name: 'Lakshman',
    message: 'We were displaced with no proper relocation help.',
  },
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Community Voices</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} style={{ background: '#f3f3f3', padding: '20px', borderRadius: '10px' }}>
            <p style={{ fontSize: '18px', fontStyle: 'italic' }}>"{t.message}"</p>
            <p style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold' }}>— {t.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
