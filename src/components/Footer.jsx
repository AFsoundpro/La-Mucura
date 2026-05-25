import React from 'react';
import { InstagramIcon, FacebookIcon } from './Icons';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Ubicación', href: '#contacto' },
  ];

  return (
    <footer style={{ 
      padding: '80px 8% 40px 8%', 
      background: '#050505', 
      borderTop: '4px solid var(--yellow)',
      color: 'white'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '50px',
        marginBottom: '60px'
      }}>
        {/* Columna 1: Identidad */}
        <div style={{ textAlign: 'left' }}>
          <img src="/logo.svg" alt="La Múcura" style={{ height: '70px', marginBottom: '25px' }} />
          <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Una experiencia gastronómica donde la tradición y la innovación se encuentran en cada bocado bajo el fuego de nuestra leña en el corazón de Chía.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div style={{ textAlign: 'left' }}>
          <h4 className="bebas" style={{ color: 'var(--yellow)', fontSize: '1.4rem', marginBottom: '25px' }}>Enlaces Rápidos</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name} style={{ marginBottom: '12px' }}>
                <a href={link.href} style={{ color: '#ccc', textDecoration: 'none', transition: 'var(--transition)' }} onMouseEnter={(e) => e.target.style.color = 'var(--yellow)'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div style={{ textAlign: 'left' }}>
          <h4 className="bebas" style={{ color: 'var(--yellow)', fontSize: '1.4rem', marginBottom: '25px' }}>Contacto</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#ccc' }}>
              <MapPin size={18} color="var(--yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Avenida Pradilla # 2 - 90<br/>Chía, Cundinamarca</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ccc' }}>
              <Phone size={18} color="var(--yellow)" />
              <span>(601) 862-6431 / 350 598 0206</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ccc' }}>
              <Mail size={18} color="var(--yellow)" />
              <span>hola@lamucura.com</span>
            </div>
          </div>
        </div>

        {/* Columna 4: Horarios y Redes */}
        <div style={{ textAlign: 'left' }}>
          <h4 className="bebas" style={{ color: 'var(--yellow)', fontSize: '1.4rem', marginBottom: '25px' }}>Horarios</h4>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#ccc', marginBottom: '25px' }}>
            <Clock size={18} color="var(--yellow)" />
            <span>Lun-Dom: 11:30 AM - 6:00 PM</span>
          </div>
          <h4 className="bebas" style={{ color: 'var(--yellow)', fontSize: '1.4rem', marginBottom: '15px' }}>Síguenos</h4>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'var(--transition)' }} className="social-icon">
              <InstagramIcon size={26} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'var(--transition)' }} className="social-icon">
              <FacebookIcon size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ 
        paddingTop: '30px', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
        textAlign: 'center',
        opacity: 0.5,
        fontSize: '0.8rem'
      }}>
        <p>© {new Date().getFullYear()} RESTAURANTE LA MÚCURA. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
};

export default Footer;
