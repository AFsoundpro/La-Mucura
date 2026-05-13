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
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu onShowPdf={() => setIsPdfOpen(true)} />
      <Events />
      <Location />
      <Parking />
      <Footer />
      <WhatsAppButton />
      <PdfModal isOpen={isPdfOpen} onClose={() => setIsPdfOpen(false)} />
    </div>
  );
}

export default App;
