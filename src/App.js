import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as LocationsAPI from './LocationsAPI';


class App extends Component {
  state = {
    query: '',
    locations: [],
    locationsName: '',
  }

  // search places from foursquare
componentDidMount() {
    LocationsAPI.search('Venice', 'Museum')
    .then(locations => {
      this.setState({ locations });
    });
  }


  render() {
    const { query, locations, locationsName } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
