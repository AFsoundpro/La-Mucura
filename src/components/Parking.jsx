import React from 'react';

const Parking = () => (
  <section id="parqueo" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>LOGÍSTICA DE <span className="gold-text">PARQUEO</span></h2>
    <p style={{ color: '#ccc', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px auto', textAlign: 'center' }}>
      Llega sin preocupaciones. Contamos con convenios en parqueaderos a pocos pasos del restaurante.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px', background: 'var(--yellow)', color: '#000', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>PARQUEADERO TRADICIÓN</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>A 50 METROS</p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7241!2d-74.0731!3d4.6721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDAnMTkuNiJOIDc0wrAwNCcxOS42Ilc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco" 
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="P1"
        ></iframe>
      </div>
      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '20px', background: 'var(--yellow)', color: '#000', textAlign: 'center' }}>
          <h3 style={{ margin: 0 }}>PARQUEADERO PLAZA</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>ENTRADA CALLE PRINCIPAL</p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7241!2d-74.0711!3d4.6721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDAnMTkuNiJOIDc0wrAwNCcxOS42Ilc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco" 
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="P2"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Parking;
