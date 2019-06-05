import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import BossStats from './BossStats/BossStats';

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

  componentDidMount() {
  }

  fetchData(endpoint, stateFunction, paramsObject) {
    fetch(API + endpoint, paramsObject)
      .then(response => response.json())
      .then(stateFunction)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <BossStats />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
