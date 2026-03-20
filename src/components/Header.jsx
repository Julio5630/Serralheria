import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#hero">
                        <span className="logo-icon">⏊</span>
                        <span className="logo-text">Vanderley Serralheiro</span>
                    </a>
                </div>

                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#services" onClick={closeMenu}>Serviços</a></li>
                        <li><a href="#portfolio" onClick={closeMenu}>Portfólio</a></li>
                        <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
                        <li>
                            <a
                                href="https://wa.me/556192708329?text=Ol%C3%A1%20Vanderley%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-small"
                                onClick={closeMenu}
                            >
                                Orçamento
                            </a>
                        </li>     </ul>
                </nav>

                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;