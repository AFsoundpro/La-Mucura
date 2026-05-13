import React from 'react';

const Hero = () => (
  <section id="inicio" style={{
    minHeight: '100vh',       
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '120px 8% 60px 8%'
  }}>
    <div style={{ maxWidth: '900px' }}>
      <img 
        src="/logo.svg" 
        alt="La Múcura Logo" 
        style={{ 
          height: '180px', 
          width: 'auto', 
          filter: 'brightness(0) invert(1)', 
          marginBottom: '40px',
          animation: 'float 6s ease-in-out infinite'
        }} 
      />
      <h1 className="hero-title" style={{ fontSize: '7rem', lineHeight: '0.9', marginBottom: '20px' }}>
        SABORES QUE <span className="gold-text">CUENTAN</span> HISTORIAS
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto', color: '#ccc' }}>
        Una experiencia gastronómica donde la tradición y la innovación se encuentran en cada bocado bajo el fuego de nuestra leña.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#menu" className="btn">VER MENÚ</a>
        <a href="#contacto" className="btn" style={{ background: 'transparent', color: 'var(--yellow)' }}>UBICACIÓN</a>
      </div>
    </div>
  </section>
);

export default Hero;
