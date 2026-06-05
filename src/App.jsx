import React, { useState } from 'react';
import './index.css';

// Importación de Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Events from './components/Events';
import Location from './components/Location';
import Parking from './components/Parking';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PdfModal from './components/PdfModal';

function App() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, pdfPath: '', title: '' });

  const openModal = (pdfPath, title) => {
    setModalConfig({ isOpen: true, pdfPath, title });
  };

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  return (
    <div>
      <Navbar />
      <div className="main-frame" style={{ 
        border: 'var(--border-size, 15px) solid var(--yellow)', 
        borderTop: 'none', 
        minHeight: '100vh',
        marginTop: '0' 
      }}>
        <Hero />
        <About />
        <Menu 
          onShowMenu={() => openModal('/menu.pdf', 'CARTA COMPLETA')} 
          onShowPhotos={() => openModal('/fotos.pdf', 'GALERÍA DE PLATOS')}
        />
        <Events />
        <Location />
        <Parking />
        <Footer />
      </div>
      <WhatsAppButton />
      <PdfModal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal} 
        pdfPath={modalConfig.pdfPath} 
        title={modalConfig.title} 
      />
    </div>
  );
}

export default App;
