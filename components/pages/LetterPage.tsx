
import React from 'react';
import { Cobweb } from '../icons';

const LetterPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-start h-full text-[#5c4d3c] p-4">
       <div className="page-stain top-5 left-5"></div>
       <Cobweb className="absolute bottom-2 right-2 w-12 h-12 text-[#d1c1a8] opacity-50 transform scale-x-[-1]" />
      <h3 className="text-3xl font-serif font-bold mb-4 border-b-2 border-[#ab8a5f] pb-2">De Coração...</h3>
      <div className="space-y-5 text-2xl leading-relaxed font-handwriting mt-4 text-[#5c4d3c]">
        <p>
          Pai,
        </p>
        <p>
          Se hoje sou forte, é porque tive seu exemplo. Se aprendi a ser gentil, foi vendo a sua bondade. Você me deu as melhores memórias e me ensinou, com seu jeito, as lições mais importantes.
        </p>
        <p>
          Tudo o que sou, eu devo um pedaço a você. Obrigado por ser meu guia, meu porto seguro.
        </p>
        <p>
          Por tudo, sempre.
        </p>
      </div>
    </div>
  );
};

export default LetterPage;