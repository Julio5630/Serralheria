import React, { useState } from 'react';
import './Portfolio.css';
import { FaSearchPlus } from 'react-icons/fa';

const portfolioData = [
  {
    id: 1,
    category: 'portoes',
    title: 'Portão Automático Residencial',
    image: '/images/portao1.jpg',
    large: false,
  },
  {
    id: 2,
    category: 'escadas',
    title: 'Escada Helicoidal',
    image: '/images/escada1.jpg',
    large: true, // destaque
  },
  {
    id: 3,
    category: 'grades',
    title: 'Guarda-Corpo em Vidro',
    image: '/images/grade1.jpg',
    large: false,
  },
  {
    id: 4,
    category: 'estruturas',
    title: 'Mezanino Industrial',
    image: '/images/estrutura1.jpg',
    large: false,
  },
  {
    id: 5,
    category: 'moveis',
    title: 'Mesa de Jantar em Ferro',
    image: '/images/mesa1.jpg',
    large: false,
  },
  {
    id: 6,
    category: 'portoes',
    title: 'Portão de Correr',
    image: '/images/portao2.jpg',
    large: false,
  },
];

const categories = [
  { value: 'todos', label: 'Todos' },
  { value: 'portoes', label: 'Portões' },
  { value: 'escadas', label: 'Escadas' },
  { value: 'grades', label: 'Grades' },
  { value: 'estruturas', label: 'Estruturas' },
  { value: 'moveis', label: 'Móveis' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'todos'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Portfólio</h2>
        
        <div className="portfolio-filters" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item ${item.large ? 'large' : ''}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(item)}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <FaSearchPlus className="zoom-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para visualização ampliada */}
      {selectedImage && (
        <div className="portfolio-modal" onClick={() => setSelectedImage(null)}>
          <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;