
import React from 'react';
import Album from './components/Album';
import CoverPage from './components/pages/CoverPage';
import IntroPage from './components/pages/IntroPage';
import PhotoPage1 from './components/pages/PhotoPage1';
import PhotoPage2 from './components/pages/PhotoPage2';
import PhotoCollagePage from './components/pages/PhotoCollagePage';
import LetterPage from './components/pages/LetterPage';
import FinalPage from './components/pages/FinalPage';
import PoemPage from './components/pages/PoemPage';
import PhotoPage3 from './components/pages/PhotoPage3';

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