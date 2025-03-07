import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import BossPage from './BossPage/BossPage';
import EquipmentPage from './EquipmentPage/EquipmentPage';
import TosPrivacy from './BotPages/TosPrivacy';
import Learningway from './Learningway Page/LearningwayPage';
import SeedIframe from './Learningway Page/SeedIframe';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/boss-stats/" element={<BossPage />} />
        <Route path="/equipment/" element={<EquipmentPage />} />
        <Route path="/learningway/" element={<Learningway />} />
        <Route path="/tos-privacy" element={<TosPrivacy />} />
        <Route path="/learningway/:seedName" element={<SeedIframe />} />
      </Routes>
    </main >
  </BrowserRouter>
);

export default App;
