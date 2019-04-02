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
    this.clickHandler = this.clickHandler.bind(this);
    this.battleOnChanged = this.battleOnChanged.bind(this);
    this.locationOnChanged = this.locationOnChanged.bind(this);
  }

  componentDidMount() {
    fetch(API + BATTLE_ENDPOINT)
      .then(response => response.json())
      .then(data => this.setState({ battles: data }))
      .catch(err => console.log(err));

    fetch(API + LOCATION_ENDPOINT)
      .then(response => response.json())
      .then(data => this.setState({ locations: data }))
      .catch(err => console.log(err));
  }

  clickHandler() {
    let postBody = {
      LocationId: this.state.locationId,
      BattleId: this.state.battleId
    };
    let postOptions = {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: { "Content-Type": "application/json" }
    }
    fetch(API + BOSSSTATS_ENDPOINT, postOptions)
      .then(response => response.json())
      .then(data => this.setState({ bossStats: data }))
      .catch(err => console.log(err))
  }

  locationOnChanged(event) {
    this.setState({ locationId: event.target.value });
    console.log(`battleId ${this.state.battleId}`);
    console.log(`locationId ${this.state.locationId}`);
  }

  battleOnChanged(event) {
    this.setState({ battleId: event.target.value })
    console.log(`battleId ${this.state.battleId}`);
    console.log(`locationId ${this.state.locationId}`);
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
            <button onClick={this.clickHandler}>Search</button>
          </section>
          <BattleInformation battleInfo={this.state.bossStats} />
        </main>
      </div>
    );
  }
}

export default App;
