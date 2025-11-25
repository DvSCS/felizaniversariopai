import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full text-[#5c4d3c] p-4 relative">
      <div className="page-stain bottom-5 right-5"></div>
      <h3 className="text-3xl font-serif font-bold mb-6 border-b-2 border-[#ab8a5f] pb-2">Uma pequena homenagem...</h3>
      <div className="space-y-4 text-lg leading-relaxed italic">
        <p>
          Pai,
        </p>
        <p>
          Tentei juntar em algumas páginas um pouco de tudo o que você significa para mim. Não são só fotos, são pedaços da nossa história.
        </p>
        <p>
          Cada uma delas guarda uma risada, um conselho, um momento que me fez ser quem eu sou hoje.
        </p>
        <p>
          Esta é a minha homenagem para você. Espero que goste.
        </p>
      </div>
    </div>
  );
};

export default IntroPage;