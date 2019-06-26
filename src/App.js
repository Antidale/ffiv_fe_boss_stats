import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import BossPage from './BossPage/BossPage';
import EquipmentPage from './EquipmentPage/EquipmentPage';

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
            <Route path={process.env.REACT_APP_URL_PREFIX + "/boss-stats/"} component={BossPage} />
            <Route path={process.env.REACT_APP_URL_PREFIX + "/equipment/"} component={EquipmentPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
