import React from 'react';

const About = () => (
  <section id="nosotros" style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
    gap: '40px', 
    alignItems: 'center' 
  }}>
    <div style={{ position: 'relative' }}>
      <img 
        src="/fachadamu.png" 
        alt="La Múcura" 
        style={{ width: '100%', borderRadius: '12px', border: '7.5px solid var(--yellow)', boxShadow: '0 0 30px rgba(245,196,0,0.2)' }}
      />
    </div>
    <div>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'left', marginBottom: '20px' }}>NUESTRA <span className="gold-text">ESENCIA</span></h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#ddd' }}>
        Nacimos con el deseo de preservar las recetas de la abuela, dándoles un toque contemporáneo sin perder el alma. 
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ddd' }}>
        En <strong>La Múcura</strong>, no solo servimos comida, compartimos nuestra cultura a través de procesos artesanales.
      </p>
      <div style={{ display: 'flex', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌾</div>
          <h4 className="bebas" style={{ color: 'var(--yellow)' }}>Orgánico</h4>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔥</div>
          <h4 className="bebas" style={{ color: 'var(--yellow)' }}>A la Leña</h4>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏺</div>
          <h4 className="bebas" style={{ color: 'var(--yellow)' }}>Tradición</h4>
        </div>
      </div>
    </div>
  </section>
);

export default About;
