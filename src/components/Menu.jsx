import React from 'react';
import { BookOpen } from 'lucide-react';

const Menu = ({ onShowMenu, onShowPhotos }) => {
  const dishes = [
    { name: "Menu Ejecutivo", price: "$24.000", desc: "Disfruta nuestro menu ejecutivo entre semana y el delicioso sabor de la comida tipica Colombiana.", img: "/mucuramenu2026.jpg" },
    { name: "Ajiaco De la Mucura", price: "$25.000", desc: "Disfruta el tipico ajiaco santafereño y su auténtico sabor.", img: "/ajiaco.jpeg" },
    { name: "Picada mixta de 3 carnes de la mucura", price: "$48.000", desc: "Fresca de la región con finas carnes y todo el sabor Colombiano para que disfrutes con tu familia.", img: "/3food.jpeg" }
  ];

  return (
    <section id="menu" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '20px' }}>PLATOS <span className="gold-text">DESTACADOS</span></h2>
      <p style={{ color: '#ccc', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
        Una selección de nuestros platos más emblemáticos. Para ver todas nuestras opciones, abre nuestra carta completa.
      </p>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px', 
        flexWrap: 'wrap',
        marginBottom: '50px' 
      }}>
        <button onClick={onShowMenu} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen size={20} /> VER CARTA COMPLETA
        </button>
        <button onClick={onShowPhotos} className="btn" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          VER GALERÍA DE PLATOS
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
        gap: '30px' 
      }}>
        {dishes.map((dish, i) => (
          <div key={i} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img 
              src={dish.img} 
              alt={dish.name} 
              style={{ 
                width: '100%', 
                height: '420px',
                objectFit: 'cover', 
                border: '7.5px solid var(--yellow)',
                borderRadius: '12px',
                background: 'rgba(0,0,0,0.2)'
              }} 
            />
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
