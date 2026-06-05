import React from 'react';

const PdfModal = ({ isOpen, onClose, pdfPath, title }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        height: '90vh',
        backgroundColor: '#111',
        borderRadius: '15px',
        position: 'relative',
        overflow: 'hidden',
        border: '3px solid var(--yellow)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          padding: '15px 25px',
          background: 'var(--yellow)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ color: '#000', margin: 0, fontSize: '1.5rem' }}>{title || 'CARTA LA MÚCURA'}</h3>
          <button 
            onClick={onClose} 
            onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = 'var(--yellow)'; }}
            style={{ 
              background: '#000', 
              border: 'none', 
              color: 'var(--yellow)', 
              fontSize: '1.5rem', 
              cursor: 'pointer', 
              width: '35px', 
              height: '35px', 
              borderRadius: '50%', 
              fontWeight: 'bold',
              transition: 'var(--transition)'
            }}
          >×</button>
        </div>
        <div style={{ flex: 1, backgroundColor: '#111', padding: '0px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <iframe 
            src={`${pdfPath}?v=1`} 
            title={title} 
            style={{ width: '100%', flex: 1, border: 'none' }}
          />
          <div style={{ 
            padding: '10px', 
            textAlign: 'center', 
            background: '#222', 
            borderTop: '1px solid #333' 
          }}>
            <a 
              href={pdfPath} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--yellow)', 
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}
            >
              ¿No puedes ver el PDF? Haz clic aquí para abrirlo o descargarlo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
