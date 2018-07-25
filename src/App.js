import React, { Component } from 'react';
import './App.css';
import * as LocationsAPI from './LocationsAPI';
import MapContainer from './Map';


class App extends Component {
  state = {
    query: '',
    places: [],
    placesName: '',
  }

  // search places from foursquare
componentDidMount() {
    LocationsAPI.search('Venice', 'Museum')
    .then(places => {
      this.setState({ places });
    });
  }

  updateQuery = (query) => {
   this.setState({ query: query.trim() });
 }

  updatePlace = (place) => {
    this.setState({placesName: place});
  }


  render() {
    const { query, places, placesName } = this.state;

    let filteredPlaces;


    return (
      <div className="app">
        <header className="app-header">

        </header>
        <main className="main">
          <section>
            <div>

            </div>
          </section>
          <section className="map-container">
            <div>
              <MapContainer
                locatioms={filteredPlaces}
                selectPlaces={placesName}
              />

            </div>

          </section>
        </main>
      </div>
    );
  }
}

export default App;
