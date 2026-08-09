import React, { useRef } from 'react';
import './About.css';

const About = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.filter = 'grayscale(0%)';
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.filter = 'grayscale(100%)';
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Sobre a Serralheria Horizonte</h2>
        <div className="about-content">
          <div className="about-video" data-aos="fade-right">
            <video
              ref={videoRef}
              src="/videos/workshop.mp4"
              muted
              loop
              autoPlay
              playsInline
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="about-text" data-aos="fade-left">
            <h3>Experiência e confiança em cada solda</h3>
            <p>
              Somos uma serralheria especializada em soluções metálicas sob medida, com mais de 15 anos de experiência. 
              Comecei ajudando meu pai na oficina e desde então nunca parei de trabalhar 
              com metal. Hoje, atendo clientes em todo o Distrito Federal, sempre com 
              o compromisso de entregar um serviço bem feito, no prazo combinado e com 
              um preço que cabe no bolso.
            </p>
            <p>
              Por ser eu mesmo quem executo cada projeto, você tem a garantia de um 
              atendimento personalizado, direto com quem vai fazer o serviço. Isso 
              significa mais agilidade, menos ruído na comunicação e a certeza de que 
              sua ideia será entendida e executada com capricho.
            </p>
            <p>
              Seja um portão, uma grade, um móvel sob medida ou uma estrutura metálica, 
              pode contar comigo. Vamos conversar e transformar seu projeto em realidade 
              com a solidez do metal e a rapidez que você precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
