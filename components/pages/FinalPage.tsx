
import React from 'react';
import { Cobweb } from '../icons';

const FinalPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center h-full text-[#5c4d3c] p-4 text-center flex-grow">
      <Cobweb className="absolute bottom-2 right-2 w-16 h-16 text-[#d1c1a8] opacity-50 transform scale-x-[-1]" />
      <h3 className="text-3xl font-serif font-bold mb-6">Com todo o meu carinho,</h3>
      <div className="space-y-4 text-lg leading-relaxed">
        <p className="italic">
          Que a vida continue te trazendo sorrisos. Feliz aniversário.
        </p>
      </div>

      <div className="mt-auto border-t-2 border-dashed border-[#ab8a5f] pt-4">
        <p className="font-handwriting text-4xl text-[#5c4d3c]">
          Seu filho
        </p>
      </div>
    </div>
  );
};

export default FinalPage;