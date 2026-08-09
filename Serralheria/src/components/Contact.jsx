import React from 'react';
import './Contact.css';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Número do WhatsApp no formato internacional (55 + DDD + número)
  const whatsappNumber = "5500000000000";
  const mensagem = "Olá, gostaria de solicitar um orçamento.";
  const mensagemCodificada = encodeURIComponent(mensagem);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagemCodificada}`;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Fale com nossa equipe</h2>
        <div className="contact-content">
          {/* Coluna esquerda: Botão do WhatsApp e diferenciais */}
          <div className="contact-whatsapp" data-aos="fade-right">
            <div className="whatsapp-card">
              <FaWhatsapp className="whatsapp-icon" />
              <h3>Atendimento rápido e direto</h3>
              <p>Clique no botão abaixo para conversar com nossa equipe e solicitar seu orçamento.</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <FaWhatsapp /> Chamar no WhatsApp
              </a>
            </div>

            {/* Diferenciais rápidos */}
            <div className="quick-differentials">
              <h4>Por que escolher a Serralheria Horizonte?</h4>
              <ul>
                <li>✓ Preço justo e combinado direto</li>
                <li>✓ Entrega rápida </li>
                <li>✓ Atendimento personalizado</li>
                <li>✓ Mais de 15 anos de experiência</li>
              </ul>
            </div>
          </div>

          {/* Coluna direita: Informações de contato (exatamente como na imagem) */}
          <div className="contact-info" data-aos="fade-left">
            <div className="info-item">
              <FaWhatsapp className="info-icon" />
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    (00) 00000-0000
                  </a>
                  
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Telefone</h4>
                <p>(00) 00000-0000</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>E-mail</h4>
                <p>contato@exemplo.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Área de atendimento</h4>
                <p>Distrito Federal e entorno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
