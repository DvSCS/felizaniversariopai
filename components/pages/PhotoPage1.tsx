import React from 'react';

const PhotoPage1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-[#5c4d3c] p-4 flex-grow">
      <div className="relative inline-block my-auto">
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '-20px',
          width: '100px',
          height: '25px',
          backgroundColor: 'rgba(240, 230, 200, 0.5)',
          borderLeft: '1px dashed rgba(0,0,0,0.1)',
          borderRight: '1px dashed rgba(0,0,0,0.1)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transform: 'rotate(-45deg)',
          zIndex: 10,
        }}></div>
        <div className="w-full max-w-md aspect-[3/4] bg-gray-200 border-8 border-white shadow-lg -rotate-2 overflow-hidden">
          <img 
            src="https://i.ibb.co/zVxB1T9s/scanner-20251124-175507.jpg" 
            alt="Foto antiga" 
            className="w-full h-full object-cover aged-photo"
            style={{ transform: 'rotate(-90deg) scale(1.2)' }}
          />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-15px',
          right: '-25px',
          width: '100px',
          height: '25px',
          backgroundColor: 'rgba(240, 230, 200, 0.5)',
          borderLeft: '1px dashed rgba(0,0,0,0.1)',
          borderRight: '1px dashed rgba(0,0,0,0.1)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transform: 'rotate(-30deg)',
          zIndex: 10,
        }}></div>
      </div>
      <p className="mt-8 text-lg italic font-serif">"O melhor espelho é um velho amigo."</p>
      <p className="mt-1 text-md">- George Herbert</p>
    </div>
  );
};

export default PhotoPage1;