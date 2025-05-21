import React from 'react';
import { usePlaces } from '../context/PlaceContext';

const PlaceList = () => {
  const { places, toggleVisited } = usePlaces();

  return (
    <div className="place-list">
      {places.length === 0 ? (
        <p>No places yet. Start adding some!</p>
      ) : (
        places.map((place) => (
          <div
            key={place.id}
            className={`place-item ${place.visited ? 'visited' : ''}`}
            onClick={() => toggleVisited(place.id)}
          >
            {place.name} {place.visited && '✅'}
          </div>
        ))
      )}
    </div>
  );
};

export default PlaceList;
