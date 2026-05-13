import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Ubicación', href: '#contacto' },
  ];

  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: scrolled ? '10px 8%' : '20px 8%',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(15px)',
      borderBottom: scrolled ? '2px solid var(--yellow)' : '1px solid rgba(245, 196, 0, 0.2)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'var(--transition)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.svg" alt="La Múcura Logo" style={{ height: scrolled ? '45px' : '55px', width: 'auto', filter: 'brightness(0) invert(1)', transition: 'var(--transition)' }} />
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
        ))}
        <a href="#contacto" className="btn" style={{ padding: '10px 25px', fontSize: '1rem' }}>Reservar</a>
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-toggle" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--yellow)', display: 'none' }}>
        {isOpen ? <X size={30} /> : <MenuIcon size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isOpen ? 0 : '-100%',
        width: '80%',
        height: '100vh',
        backgroundColor: 'var(--dark)',
        display: 'flex',
        flexDirection: 'column',
        padding: '100px 40px',
        gap: '30px',
        transition: 'var(--transition)',
        zIndex: 999,
        boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
        borderLeft: '2px solid var(--yellow)'
      }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="bebas" 
            onClick={toggleMenu}
            style={{ color: 'white', textDecoration: 'none', fontSize: '2rem', letterSpacing: '2px' }}
          >
            {link.name}
          </a>
        ))}
        <a href="#contacto" className="btn" onClick={toggleMenu} style={{ textAlign: 'center' }}>RESERVAR</a>
      </div>
    </nav>
  );
};

export default Navbar;
