import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import BossStats from './BossStats/BossStats';
import EquipmentStats from './EquipmentStats/EquipmentStats';

const API = "https://localhost:5001/api/";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      battles: [],
      bossStats: [],
      locationId: 1,
      battleId: 1
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/boss-stats/" component={BossStats} />
            <Route path="/equipment/" component={EquipmentStats} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
