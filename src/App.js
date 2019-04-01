import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown';
import BossStat from './BossStat/BossStat';

const API = "https://localhost:5001/api/";
const BATTLE_ENDPOINT = "bossbattle";
const LOCATION_ENDPOINT = "battlelocation";
const BOSSSTATS_ENDPOINT = "bossstats";

const test = (input) => {
  console.log(input.target.value);
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      battles: [],
      locationId: 1,
      battleId: 1
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {

    fetch(API + BATTLE_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        data.unshift({ id: 0, name: "Any" }); return data;
      })
      .then(data => this.setState({ battles: data }))
      .catch(err => console.log(err));

    fetch(API + LOCATION_ENDPOINT)
      .then(response => response.json())
      .then(data => { data.unshift({ id: 0, name: "Any" }); return data; })
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Free Enterprise</h1>
        </header>
        <main>
          <section>
            <Dropdown
              title="battles"
              items={this.state.battles}
              onValueChanged={test}
              defaultValue={0} />
            <Dropdown
              title="locations"
              items={this.state.locations}
              onValueChanged={test}
              defaultValue={1}
            />
            <button onClick={this.clickHandler}>Search</button>
          </section>
          <BossStat bossStat={this.state.bossStats} />
        </main>
      </div>
    );
  }
}

export default App;
