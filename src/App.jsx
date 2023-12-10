import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import BossPage from './BossPage/BossPage';
import EquipmentPage from './EquipmentPage/EquipmentPage';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/boss-stats/" element={<BossPage />} />
        <Route path="/equipment/" element={<EquipmentPage />} />
      </Routes>
    </main >
  </BrowserRouter>
);

export default App;
