import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => (
  <section id="contacto" style={{ textAlign: 'center' }}>
    <h2 style={{ fontSize: '4rem', marginBottom: '60px' }}>NUESTRA <span className="gold-text">UBICACIÓN</span></h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'left', marginBottom: '60px' }}>
      <div className="info-box" style={{ padding: '20px', borderLeft: '3px solid var(--yellow)', background: 'rgba(255,255,255,0.02)' }}>
        <h4 className="gold-text bebas" style={{ fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MapPin size={20} /> VISÍTANOS
        </h4>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Calle de la Tradición #12-34</p>
        <p>El Pueblito, Colombia</p>
      </div>
      <div className="info-box" style={{ padding: '20px', borderLeft: '3px solid var(--yellow)', background: 'rgba(255,255,255,0.02)' }}>
        <h4 className="gold-text bebas" style={{ fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Phone size={20} /> CONTACTO
        </h4>
        <p>Tel: +57 300 123 4567</p>
        <p>hola@lamucura.com</p>
      </div>
      <div className="info-box" style={{ padding: '20px', borderLeft: '3px solid var(--yellow)', background: 'rgba(255,255,255,0.02)' }}>
        <h4 className="gold-text bebas" style={{ fontSize: '1.5rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Clock size={20} /> HORARIOS
        </h4>
        <p>Lun-Sáb: 12:00 - 22:00</p>
        <p>Dom: 12:00 - 18:00</p>
      </div>
    </div>
    <div style={{ width: '100%', height: '500px', borderRadius: '20px', overflow: 'hidden', border: '2px solid var(--yellow)', boxShadow: '0 0 30px rgba(245,196,0,0.1)' }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7241!2d-74.0721!3d4.6721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDAnMTkuNiJOIDc0wrAwNCcxOS42Ilc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Main"></iframe>
    </div>
  </section>
);

export default Location;
