import React, { Component } from 'react';
import './App.css';
import * as LocationsAPI from './LocationsAPI';
import MapContainer from './Map';
import escapeRegExp from 'escape-string-regexp';
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';


const header = {
  fontSize: '1.1rem',
  lineHeight: '50px',
  display: 'flex',
  margin: 'auto'
}

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

    let filterPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filterPlaces = places
        .filter(place => match.test(place.name));
    } else {
      filterPlaces = places;
    }


    return (
      <div className="app">
        <header className="app-header">
          <h1 style={header}>Venice Museums</h1>
        </header>
        <main className="main">
          <section>
            <div>

            </div>
          </section>
          <section className="map-container">
            <div>
              <MapContainer
                places={filterPlaces}
                selectPlaces={placesName}
              />
            </div>

          </section>
        </main>
        <footer>
          <p className="footer-text">Places are Powered by Foursquare</p>
        </footer>
      </div>
    );
  }
}

export default App;
