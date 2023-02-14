import React from 'react';
import './App.css';
import './style.css'
import Map from './components/MapComponent.js.js'


const App = () => {
  return (
    <div className='App-header'>
      <h1>Map App With React</h1>
      <div className='map-container'>
        
        <Map 
        isMarkerShown
        googleMapURL="`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  )
};

export default App;
