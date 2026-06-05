import React from 'react';

const Parking = () => (
  <section id="parqueo" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '20px' }}>LOGÍSTICA DE <span className="gold-text">PARQUEO</span></h2>
    <p style={{ color: '#ccc', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto', textAlign: 'center' }}>
      Llega sin preocupaciones. Contamos con convenios en parqueaderos a pocos pasos del restaurante.
    </p>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
      gap: '30px' 
    }}>
      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px', background: 'var(--yellow)', color: '#000', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>PARQUEADERO TRADICIÓN</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>A 50 METROS</p>
        </div>
        <iframe 
          src="https://maps.google.com/maps?q=Restaurante%20La%20Mucura%20Chía%20Pradilla%202-90&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="P1"
        ></iframe>
      </div>
      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px', background: 'var(--yellow)', color: '#000', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>PARQUEADERO PLAZA</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>ENTRADA CALLE PRINCIPAL</p>
        </div>
        <iframe 
          src="https://maps.google.com/maps?q=Restaurante%20La%20Mucura%20Chía%20Pradilla%202-90&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="P2"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Parking;
