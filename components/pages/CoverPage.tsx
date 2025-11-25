
import React from 'react';
import { Cobweb } from '../icons.tsx';

const CoverPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center text-[#5c4d3c] border-4 border-[#ab8a5f] p-4">
      <Cobweb className="absolute top-2 left-2 w-16 h-16 text-[#d1c1a8] opacity-60" />
      <Cobweb className="absolute bottom-2 right-2 w-12 h-12 text-[#d1c1a8] opacity-50 transform scale-x-[-1]" />
      <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Feliz Aniversário,</h1>
      <h2 className="text-3xl md:text-5xl font-bold font-serif italic mb-8">Pai!</h2>
      <div className="w-full max-w-sm aspect-[3/4] bg-gray-200 border-8 border-white shadow-lg rotate-3 overflow-hidden">
        <img 
          src="https://i.ibb.co/jvTWBrtb/scanner-20251124-175453.jpg" 
          alt="Foto de família antiga" 
          className="w-full h-full object-cover aged-photo" 
          style={{ transform: 'rotate(-90deg) scale(1.2)' }}
        />
      </div>
      <p className="mt-8 text-lg italic">Um álbum de memórias e carinho.</p>
    </div>
  );
};

export default CoverPage;