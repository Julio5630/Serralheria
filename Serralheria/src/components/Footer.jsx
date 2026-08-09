import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">⏊</span>
            <span className="logo-text">Serralheria Horizonte</span>
          </div>
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#portfolio">Trabalhos</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#contact" aria-label="Ir para contato"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Serralheria Horizonte - Todos os direitos reservados.</p>
          <p className="developer">Atendimento em todo o Distrito Federal</p>

          {/* NOVA LINHA: Informações do desenvolvedor */}
          <div className="developer-info">
            <FaCode className="dev-icon" />
            <span>
              Desenvolvido por <strong>Júlio César</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
