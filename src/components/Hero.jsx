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
    <div style={{ maxWidth: '900px', width: '100%' }}>
      <img 
        src="/logo.png" 
        alt="La Múcura Logo" 
        style={{ 
          height: 'auto', 
          maxWidth: '260px',
          width: '70%', 
          marginBottom: '20px',
          animation: 'float 6s ease-in-out infinite',
        }} 
      />
      <h1 className="hero-title" style={{ 
        fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
        lineHeight: '1', 
        marginBottom: '20px' 
      }}>
        SABORES QUE <span className="gold-text">CUENTAN</span> HISTORIAS
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto', color: '#ccc' }}>
        Una experiencia gastronómica donde la tradición y la innovación se encuentran en cada bocado bajo el fuego de nuestra leña.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#menu" className="btn">VER MENÚ</a>
        <a href="#contacto" className="btn-outline">UBICACIÓN</a>
      </div>
    </div>
  </section>
);

export default Hero;
