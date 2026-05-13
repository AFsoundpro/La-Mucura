import React from 'react';
import { BookOpen } from 'lucide-react';

const Menu = ({ onShowPdf }) => {
  const dishes = [
    { name: "Asado de la Casa", price: "$45.000", desc: "Corte premium cocinado a fuego lento por 12 horas.", img: "/1.jpeg" },
    { name: "Cazuela Múcura", price: "$38.000", desc: "Mezcla de granos y carnes en vasija de barro tradicional.", img: "/ajiaco.jpeg" },
    { name: "Trucha al Ajillo", price: "$35.000", desc: "Fresca de la región con finas hierbas del huerto.", img: "/3food.jpeg" }
  ];

  return (
    <section id="menu" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '5rem', marginBottom: '20px' }}>PLATOS <span className="gold-text">DESTACADOS</span></h2>
      <p style={{ color: '#ccc', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px auto' }}>
        Una selección de nuestros platos más emblemáticos. Para ver todas nuestras opciones, abre nuestra carta completa.
      </p>
      
      <div style={{ marginBottom: '60px' }}>
        <button onClick={onShowPdf} className="btn" style={{ background: 'transparent', border: '2px solid var(--yellow)', color: 'var(--yellow)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', margin: '0 auto' }}>
          <BookOpen size={20} /> VER CARTA COMPLETA
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        {dishes.map((dish, i) => (
          <div key={i} className="glass-card" style={{ overflow: 'hidden' }}>
            <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderBottom: '2px solid var(--yellow)' }} />
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>{dish.name}</h3>
              <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>{dish.desc}</p>
              <span style={{ fontSize: '2.5rem', color: 'var(--yellow)', fontFamily: 'Bebas Neue' }}>{dish.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
