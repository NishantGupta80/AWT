import React, { createContext, useContext, useState } from 'react';

const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);

  const addPlace = (name) => {
    setPlaces([...places, { id: Date.now(), name, visited: false }]);
  };

  const toggleVisited = (id) => {
    setPlaces(
      places.map((place) =>
        place.id === id ? { ...place, visited: !place.visited } : place
      )
    );
  };

  const total = places.length;
  const visited = places.filter((p) => p.visited).length;

  return (
    <PlaceContext.Provider value={{ places, addPlace, toggleVisited, total, visited }}>
      {children}
    </PlaceContext.Provider>
  );
};

export const usePlaces = () => useContext(PlaceContext);
