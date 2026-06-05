import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => (
  <section id="contacto" style={{ textAlign: 'center' }}>
    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '40px' }}>NUESTRA <span className="gold-text">UBICACIÓN</span></h2>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
      gap: '20px', 
      textAlign: 'left', 
      marginBottom: '40px' 
    }}>
      <div className="info-box" style={{ padding: '20px', borderLeft: '3px solid var(--yellow)', background: 'rgba(255,255,255,0.02)' }}>
        <h4 className="gold-text bebas" style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MapPin size={20} /> VISÍTANOS
        </h4>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Avenida Pradilla # 2 - 90</p>
        <p>Chía, Cundinamarca</p>
      </div>
      <div className="info-box" style={{ padding: '20px', borderLeft: '3px solid var(--yellow)', background: 'rgba(255,255,255,0.02)' }}>
        <h4 className="gold-text bebas" style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Phone size={20} /> CONTACTO
        </h4>
        <p>Fijo: (601) 862-6431</p>
        <a 
          href="https://wa.me/573505980206" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}
        >
          Cel: 350 598 0206 <span style={{ fontSize: '0.8rem', background: '#25D366', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>WhatsApp</span>
        </a>
      </div>
      <div className="info-box" style={{ padding: '20px', borderLeft: '3px solid var(--yellow)', background: 'rgba(255,255,255,0.02)' }}>
        <h4 className="gold-text bebas" style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Clock size={20} /> HORARIOS
        </h4>
        <p>Lun-Dom: 11:30 - 18:00</p>
      </div>
    </div>
    <div style={{ 
      width: '100%', 
      height: 'clamp(300px, 50vh, 500px)', 
      borderRadius: '12px', 
      overflow: 'hidden', 
      border: '7.5px solid var(--yellow)', 
      boxShadow: '0 0 30px rgba(245,196,0,0.1)' 
    }}>
      <iframe src="https://maps.google.com/maps?q=Restaurante%20La%20Mucura%20Chía%20Pradilla%202-90&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Main"></iframe>
    </div>
  </section>
);

export default Location;
