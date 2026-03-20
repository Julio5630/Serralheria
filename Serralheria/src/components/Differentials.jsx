import React, { useEffect, useRef } from 'react';
import './Differentials.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const differentialsData = [
  {
    icon: '🏅',
    title: 'Material Certificado',
    description: 'Utilizamos aço de alta qualidade com certificação de origem.'
  },
  {
    icon: '⚙️',
    title: 'Equipe Especializada',
    description: 'Profissionais com mais de 15 anos de experiência no setor.'
  },
  {
    icon: '📅',
    title: 'Cumprimento de Prazos',
    description: 'Entregamos seu projeto no tempo combinado, com qualidade.'
  }
];

const Differentials = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      gsap.fromTo(icon,
        { scale: 0.8, opacity: 0.3, color: '#B0B0B0' },
        {
          scale: 1,
          opacity: 1,
          color: '#FF6B35',
          duration: 1,
          scrollTrigger: {
            trigger: icon,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
          }
        }
      );
    });
  }, []);

  return (
    <section id="differentials" className="differentials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Por que nos escolher</h2>
        <div className="differentials-grid">
          {differentialsData.map((item, index) => (
            <div
              key={index}
              className="differential-item"
              data-aos="flip-up"
              data-aos-delay={index * 200}
            >
              <div
                className="differential-icon"
                ref={el => iconsRef.current[index] = el}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;