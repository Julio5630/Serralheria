import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'João Silva',
    photo: '/images/client1.jpg',
    text: 'Excelente trabalho! Fizeram um portão automático para minha casa e ficou perfeito. Profissionais muito capacitados.',
    role: 'Cliente Residencial'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    photo: '/images/client2.jpg',
    text: 'Agradeço pela estrutura metálica do meu galpão. Entregaram antes do prazo e com qualidade impecável.',
    role: 'Empresária'
  },
  {
    id: 3,
    name: 'Carlos Santos',
    photo: '/images/client3.jpg',
    text: 'Os móveis em ferro que encomendei são verdadeiras obras de arte. Atendimento personalizado e de primeira.',
    role: 'Arquiteto'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Depoimentos</h2>
        
        <div className="testimonials-carousel">
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel-content">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-photo">
                  <img src={testimonial.photo} alt={testimonial.name} />
                </div>
                <div className="testimonial-text">
                  <FaQuoteRight className="quote-icon" />
                  <p>"{testimonial.text}"</p>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;