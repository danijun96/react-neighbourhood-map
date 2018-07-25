import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { mapStyle } from './mapStyle.js'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCcovUFOdIbTqFuhfFF7JB_OSdQ9_LmUfY&v=3",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 34px)` }} />,
    mapElement: <div style={{ height: `100%` }}/>
  }),
  withScriptjs,
  withGoogleMap
)((props) => (

<GoogleMap
  ref={props.onMapLoad}
  defaultOptions={{styles: mapStyle}}
  defaultZoom={13}
  defaultCenter={{ lat: 45.440847, lng: 12.315515 }}>

  {props.placeDetail? props.placeDetail.map(place => (
    <Marker
      key={place.id}
      position={{ lat: place.place.lat, lng: place.place.lng }}
      animation={window.google.maps.Animation.BOUNCE}>
      <InfoBox>
        <div className="box"
        >
          <div className="box-header">
            {place.name}
          </div>
          <div className="box-content">
            <h6>Address</h6>
            <p>{place.location.formattedAddress}</p>
          </div>
        </div>
      </InfoBox>
    </Marker>
  )):(null)}
  {props.places.map(place => (
    <Marker
      key={place.id}
      title={place.name}
      position={{ lat: place.place.lat, lng: place.place.lng }}
      onClick={() => props.onMarkerClick(place.id)}
    >
    </Marker>
  ))}
</GoogleMap>

));


class MapContainer extends Component {

  render() {

    return (
      <Map

      />
    );
  }
}

export default MapContainer;
