import React, { useEffect } from 'react';
import './ServiceModal.css';
import { FaTimes } from 'react-icons/fa';

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-icon">{service.icon}</div>
        <h2>{service.title}</h2>
        <p className="modal-description">{service.details}</p>
        <div className="modal-actions">
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Solicitar Orçamento
          </a>
          <button className="btn btn-outline" onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
