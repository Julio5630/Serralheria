import React, { useState } from 'react';
import './Services.css';
import ServiceModal from './ServiceModal';
import { FaArrowRight } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: '🚪',
    title: 'Portões Automáticos',
    description: 'Sistemas automatizados com segurança e design.',
    details: 'Portões de correr, pivotantes ou basculantes com motores silenciosos e controles remotos. Acabamento em pintura eletrostática.'
  },
  {
    id: 2,
    icon: '🪜',
    title: 'Grades e Guarda-Corpos',
    description: 'Proteção e estilo para residências e empresas.',
    details: 'Grades de ferro, alumínio ou inox. Guarda-corpos com designs modernos ou clássicos, conforme sua necessidade.'
  },
  {
    id: 3,
    icon: '🏗️',
    title: 'Estruturas Metálicas',
    description: 'Galpões, mezaninos e coberturas sob medida.',
    details: 'Projetos estruturais completos, com cálculo de engenharia e montagem rápida.'
  },
  {
    id: 4,
    icon: '🪑',
    title: 'Móveis Sob Medida',
    description: 'Peças exclusivas em metal para ambientes internos e externos.',
    details: 'Mesas, cadeiras, estantes e bancadas com design personalizado e acabamento de alta durabilidade.'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Nossos Serviços</h2>
        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card"
              data-aos="zoom-in-up"
              data-aos-delay={service.id * 100}
              onClick={() => setSelectedService(service)}
            >
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="card-btn">
                Ver mais <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;