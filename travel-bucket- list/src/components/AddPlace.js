import React, { useState } from 'react';
import { usePlaces } from '../context/PlaceContext';

const AddPlace = () => {
  const [place, setPlace] = useState('');
  const { addPlace } = usePlaces();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place.trim()) {
      addPlace(place.trim());
      setPlace('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Add a new place..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPlace;
