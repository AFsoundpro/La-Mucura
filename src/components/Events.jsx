import React from 'react';
import { ChevronRight } from 'lucide-react';

const Events = () => (
  <section id="eventos" style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
    gap: '40px', 
    alignItems: 'center' 
  }}>
    <div className="event-img" style={{ order: window.innerWidth < 900 ? 1 : 2 }}>
      <img 
        src="/ambientM.jpeg" 
        alt="Eventos" 
        style={{ width: '100%', borderRadius: '12px', border: '7.5px solid var(--yellow)' }}
      />
    </div>
    <div style={{ order: window.innerWidth < 900 ? 2 : 1 }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'left', marginBottom: '20px' }}>EVENTOS <span className="gold-text">PRIVADOS</span></h2>
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
