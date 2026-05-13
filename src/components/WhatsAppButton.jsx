import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/573001234567" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#25D366',
      color: 'white',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      zIndex: 1001,
      transition: 'var(--transition)'
    }}
    className="whatsapp-float"
  >
    <MessageCircle size={35} fill="white" />
  </a>
);

export default WhatsAppButton;
