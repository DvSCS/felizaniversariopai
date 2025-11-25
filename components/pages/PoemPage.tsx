
import React from 'react';
import { Cobweb } from '../icons.tsx';

const PoemPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center h-full text-[#5c4d3c] p-4">
      <Cobweb className="absolute top-2 left-2 w-12 h-12 text-[#d1c1a8] opacity-50" />
      <div className="page-stain bottom-5 left-5"></div>
      <h3 className="text-3xl font-serif font-bold mb-6 text-center border-b-2 border-dashed border-[#ab8a5f] pb-2">De Herói a Amigo</h3>
      <div className="space-y-4 text-md leading-relaxed italic text-center">
        <p>
          O tempo passa, a vida muda,
        </p>
        <p>
          mas uma coisa nunca mudou:
        </p>
        <p>
          o orgulho que tenho de você.
        </p>
        <p>
          Hoje, mais do que meu pai, você é meu amigo.
        </p>
        <p>
          E essa é a maior sorte que eu poderia ter.
        </p>
      </div>
    </div>
  );
};

export default PoemPage;