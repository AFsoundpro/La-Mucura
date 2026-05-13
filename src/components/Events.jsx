import React from 'react';
import { ChevronRight } from 'lucide-react';

const Events = () => (
  <section id="eventos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
    <div className="event-img" style={{ order: 2 }}>
      <img 
        src="/ambientM.jpeg" 
        alt="Eventos" 
        style={{ width: '100%', borderRadius: '20px', border: '4px solid var(--yellow)' }}
      />
    </div>
    <div style={{ order: 1 }}>
      <h2 style={{ fontSize: '4rem', textAlign: 'left', marginBottom: '20px' }}>EVENTOS <span className="gold-text">PRIVADOS</span></h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd', marginBottom: '30px' }}>
        Creamos momentos inolvidables para tus fechas especiales. Bodas, aniversarios y cenas corporativas con un toque de distinción.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ChevronRight style={{ color: 'var(--yellow)' }} />
          <p>Menú personalizado para grupos</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ChevronRight style={{ color: 'var(--yellow)' }} />
          <p>Capacidad: 80 personas</p>
        </div>
      </div>
      <a href="#contacto" className="btn">COTIZAR AHORA</a>
    </div>
  </section>
);

export default Events;
