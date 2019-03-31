import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown';

const API = "https://localhost:5001/api/";
const BATTLE_ENDPOINT = "bossbattle";
const LOCATION_ENDPOINT = "battlelocation"

const test = (input) => {
  console.log(input.target.value);
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      battles: [],
      locationId: 0,
      battleId: 0
    };
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



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Free Enterprise</p>
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
        </header>
      </div>
    );
  }
}

export default App;
