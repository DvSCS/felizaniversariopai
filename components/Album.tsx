import React from 'react';

interface AlbumProps {
  pages: React.ReactNode[];
}

const Album: React.FC<AlbumProps> = ({ pages }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 my-12">
      <div className="flex flex-col gap-16">
        {pages.map((page, index) => (
          <div 
            key={index}
            className="bg-[#f7f0e0] p-6 md:p-10 w-full min-h-[80vh] flex flex-col page-container torn-edges"
          >
            <div className="page-content flex-grow flex flex-col">
              {page}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;