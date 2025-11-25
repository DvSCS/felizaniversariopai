import React from 'react';

const PhotoPage3: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-[#5c4d3c] p-4">
       <div className="relative transform rotate-3">
         <div className="p-4 pb-16 bg-[#fdfbf5] shadow-xl">
            <div className="w-full max-w-sm aspect-square bg-gray-200 overflow-hidden">
                <img src="https://i.ibb.co/QF3WMsjR/1764032373770.jpg" alt="Foto antiga estilo polaroid" className="w-full h-full object-cover aged-photo" />
            </div>
         </div>
         <p className="absolute bottom-4 left-0 right-0 font-handwriting text-3xl text-center">Sempre um exemplo.</p>
       </div>
    </div>
  );
};

export default PhotoPage3;