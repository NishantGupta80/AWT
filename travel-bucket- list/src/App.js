import React from 'react';
import { PlaceProvider } from './context/PlaceContext';
import AddPlace from './components/AddPlace';
import PlaceList from './components/PlaceList';
import Stats from './components/Stats';

function App() {
  return (
    <PlaceProvider>
      <div className="app">
        <h1>Travel Bucket List 🌍</h1>
        <AddPlace />
        <Stats />
        <PlaceList />
      </div>
    </PlaceProvider>
  );
}

export default App;
