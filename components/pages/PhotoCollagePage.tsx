
import React from 'react';
import { Cobweb } from '../icons.tsx';

const PhotoCollagePage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full text-center text-[#5c4d3c] p-4 space-y-8 overflow-hidden flex-grow">
      <div className="page-stain top-20 left-5 opacity-80"></div>
      <Cobweb className="absolute top-1 right-1 w-12 h-12 text-[#d1c1a8] opacity-40" />
      <h3 className="text-2xl font-serif font-bold mb-2">Cantinho das Lembranças</h3>
      
      <div className="relative transform -rotate-6 self-center">
        <div className="w-48 h-32 bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
          <img src="https://i.ibb.co/4nJ585b9/1764032373794.jpg" alt="Lembrança 1" className="w-full h-full object-cover aged-photo" />
        </div>
        <p className="font-handwriting text-lg mt-1">Primeira vez que a calopsita subiu no braço</p>
      </div>

      <div className="relative transform rotate-4 self-center">
        <div className="w-40 h-48 bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
          <img src="https://i.ibb.co/whyP55Dp/1764032373720.jpg" alt="Lembrança 2" className="w-full h-full object-cover aged-photo" />
        </div>
        <p className="font-handwriting text-lg mt-1">A irmandade</p>
      </div>

      <div className="relative transform -rotate-3 self-center">
        <div className="w-56 h-36 bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
          <img src="https://i.ibb.co/VpBMgLrG/1764032373696.jpg" alt="Lembrança 3" className="w-full h-full object-cover aged-photo" />
        </div>
        <p className="font-handwriting text-lg mt-1">Bolo doce demais de gracinha</p>
      </div>

    </div>
  );
};

export default PhotoCollagePage;