
import React from 'react';
import Album from './components/Album.tsx';
import CoverPage from './components/pages/CoverPage.tsx';
import IntroPage from './components/pages/IntroPage.tsx';
import PhotoPage1 from './components/pages/PhotoPage1.tsx';
import PhotoPage2 from './components/pages/PhotoPage2.tsx';
import PhotoCollagePage from './components/pages/PhotoCollagePage.tsx';
import LetterPage from './components/pages/LetterPage.tsx';
import FinalPage from './components/pages/FinalPage.tsx';
import PoemPage from './components/pages/PoemPage.tsx';
import PhotoPage3 from './components/pages/PhotoPage3.tsx';

const allPages = [
  <CoverPage />, 
  <IntroPage />,
  <PhotoPage1 />, 
  <PhotoPage2 />,
  <PhotoCollagePage />, 
  <LetterPage />,
  <PoemPage />, 
  <PhotoPage3 />,
  <FinalPage />,
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Album pages={allPages} />
    </div>
  );
};

export default App;