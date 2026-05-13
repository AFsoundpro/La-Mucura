import React from 'react';
import { InstagramIcon, FacebookIcon } from './Icons';

const Footer = () => (
  <footer style={{ padding: '60px 8% 40px 8%', background: '#000', borderTop: '4px solid var(--yellow)', textAlign: 'center' }}>
    <img src="/logo.svg" alt="La Múcura" style={{ height: '80px', filter: 'brightness(0) invert(1)', marginBottom: '30px' }} />
    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', marginBottom: '30px' }}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'var(--transition)' }} className="social-icon">
        <InstagramIcon size={30} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'var(--transition)' }} className="social-icon">
        <FacebookIcon size={30} />
      </a>
    </div>
    <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>© 2026 RESTAURANTE LA MÚCURA. TODOS LOS DERECHOS RESERVADOS.</p>
  </footer>
);

export default Footer;
