import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';


const testimonials = [
  {
    name: 'Geeta Devi',
    message:
      'We’re sick, our kids are sick. And we’re not heard. The water is not safe.',
    avatar: '/avatars/Seeta.jpg',
  },
  {
    name: 'Ramesh Kumar',
    message:
      'Our fields are dry. The land doesn’t grow anymore. There is no compensation.',
    avatar: '/avatars/ram.jpg',
  },
  {
    name: 'Anonymous Resident, Jaduguda',
    message:
      'After the mine came, many of us got sick. The dust is everywhere. We can’t breathe freely.',
    avatar: '/avatars/Suresh.jpg',
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
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>
        Community Voices 🗣️
      </h2>

      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div
            key={index}
            style={{
              background: '#f9f9f9',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
            }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '20px',
              }}
            />
            <p
              style={{
                fontSize: '18px',
                fontStyle: 'italic',
                marginBottom: '15px',
                lineHeight: '1.5',
                color: '#333',
                color: '#f0f0f0',
              }}
            >
              "{t.message}"
            </p>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#555',
                color: '#f0f0f0',
              }}
            >
              — {t.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
