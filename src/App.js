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
      sidebarVisible: false,
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

  toggleSidebar = (sidebarVisible) => {
        if (this.state.sidebarVisible) {
            this.setState({
                sidebarVisible: false
            });
        } else {
            this.setState({
                sidebarVisible: true
            });
        }
    }


render() {

  const { sidebarVisible } = this.state;
  const { query, places, placesName } = this.state;
  let filteredPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filteredPlaces = places
        .filter(place => match.test(place.name));
    } else {
      filteredPlaces = places;
    }

return (
  <div className="app">
    <header className="app-header">
      <button
        className="app-list"
        id="app-list"
        tabIndex="0"
        aria-label={ sidebarVisible ? "back arrow" : "bars icon" }
        onClick={ this.toggleSidebar }>
        <FontAwesomeIcon icon={ sidebarVisible ? faArrowLeft : faBars }/>
      </button>
      <h1 style={header}>Venice Museums</h1>
    </header>
    <main className="main">
      <section className={ sidebarVisible ? "sidebar open" : "sidebar close" }  id="sidebar">
        <div className="searchbar">
          <SearchBar
            query={this.updateQuery}
            places={filteredPlaces}
            selectPlace={this.updatePlace}/>
        </div>
      </section>
      <section className="map-window">
        <div>
          <MapContainer
            places={filteredPlaces}
            selectPlace={placesName}
          />
        </div>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Places are Powered by Foursquare</p>

            </footer>
      </div>
    );
  }
}

export default App
