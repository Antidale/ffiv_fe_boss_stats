import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown';
import Header from './Header/Header';
import BattleInformation from './BattleInformation/BattleInformation';

const API = "https://localhost:5001/api/";
const BATTLE_ENDPOINT = "bossbattle";
const LOCATION_ENDPOINT = "battlelocation";
const BOSSSTATS_ENDPOINT = "bossstats";

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

    this.battleOnChanged = this.battleOnChanged.bind(this);
    this.locationOnChanged = this.locationOnChanged.bind(this);
    this.getBattleInformation = this.getBattleInformation.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(
      BATTLE_ENDPOINT,
      data => this.setState({ battles: data })
    );

    this.fetchData(
      LOCATION_ENDPOINT,
      data => this.setState({ locations: data })
    );

    this.getBattleInformation(this.state.locationId, this.state.battleId);
  }

  locationOnChanged(event) {
    this.setState({ locationId: event.target.value });
    this.getBattleInformation(event.target.value, this.state.battleId);
  }

  battleOnChanged(event) {
    this.setState({ battleId: event.target.value });
    this.getBattleInformation(this.state.locationId, event.target.value);
  }

  getBattleInformation(locationId, battleId) {
    let postBody = {
      LocationId: locationId,
      BattleId: battleId
    };
    let postOptions = {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: { "Content-Type": "application/json" }
    }

    this.fetchData(BOSSSTATS_ENDPOINT,
      data => this.setState({ bossStats: data }),
      postOptions)
  }

  fetchData(endpoint, stateFunction, paramsObject) {
    fetch(API + endpoint, paramsObject)
      .then(response => response.json())
      .then(stateFunction)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <section>
            <Dropdown
              title="battles"
              items={this.state.battles}
              onValueChanged={this.battleOnChanged}
              defaultValue={0} />
            <Dropdown
              title="locations"
              items={this.state.locations}
              onValueChanged={this.locationOnChanged}
              defaultValue={1}
            />
          </section>
          <BattleInformation battleInfo={this.state.bossStats} />
        </main>
      </div>
    );
  }
}

export default App;
