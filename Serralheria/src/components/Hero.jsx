import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const particlesRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.5'
            )
            .fromTo(ctaRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6 },
                '-=0.3'
            );

        // Partículas animadas
        gsap.to(particlesRef.current.children, {
            y: -30,
            opacity: 0,
            duration: 2,
            stagger: 0.2,
            repeat: -1,
            ease: 'power1.inOut'
        });

        // Animação de scroll
        gsap.to(heroRef.current, {
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            opacity: 0.5,
            scale: 0.95
        });
    }, []);

    return (
        <section id="hero" className="hero" ref={heroRef}>
            <div className="hero-video">
                <video autoPlay muted loop playsInline>
                    <source src="/videos/sparks.mp4" type="video/mp4" />
                    {/* Fallback para imagem caso o vídeo não carregue */}
                </video>
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 ref={titleRef} className="hero-title">
                    Transformamos Metal em <span className="highlight">Soluções Duradouras</span>
                </h1>
                <p ref={subtitleRef} className="hero-subtitle">
                    Serralheiro autônomo no Distrito Federal. Preço justo, entrega rápida e trabalho personalizado.
                </p>
                <div ref={ctaRef} className="hero-cta">
                    <a
                        href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-large pulse-border"
                    >
                        Solicite seu Orçamento
                    </a>
                </div>
            </div>

            <div className="particles" ref={particlesRef}>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
        </section>
    );
};

export default Hero;
