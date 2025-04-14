import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

const Home = lazy(() => import('./Home/Home'));
const BossPage = lazy(() => import('./BossPage/BossPage'));
const EquipmentPage = lazy(() => import('./EquipmentPage/EquipmentPage'));
const TosPrivacy = lazy(() => import('./BotPages/TosPrivacy'));
const Learningway = lazy(() => import('./Learningway Page/LearningwayPage'));
const SeedIframe = lazy(() => import('./Learningway Page/SeedIframe'));
const InstructionalVideos = lazy(() => import('./Learningway Page/InstructionalVideos'))
const LearningwaySeeds = lazy(() => import('./Learningway Page/LearningwaySeeds'))

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/boss-stats/" element={<BossPage />} />
          <Route path="/equipment/" element={<EquipmentPage />} />
          <Route path="/learningway/" element={<Learningway />} />
          <Route path="/learningway/seeds" element={<LearningwaySeeds />} />
          <Route path="/learningway/seeds/:seedName" element={<SeedIframe />} />
          <Route path="/learningway/videos" element={<InstructionalVideos />} />
          <Route path="/tos-privacy" element={<TosPrivacy />} />
        </Routes>
      </Suspense>
    </main >
  </BrowserRouter>
);

export default App;
