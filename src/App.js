import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import BossPage from './BossPage/BossPage';
import EquipmentPage from './EquipmentPage/EquipmentPage';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/boss-stats/" component={BossPage} />
        <Route path="/equipment/" component={EquipmentPage} />
      </main>
    </div>
  </Router>
);


export default App;
