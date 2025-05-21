import React from 'react';
import { usePlaces } from '../context/PlaceContext';

const Stats = () => {
  const { total, visited } = usePlaces();

  return (
    <div className="stats">
      <p>Total: {total}</p>
      <p>Visited: {visited}</p>
    </div>
  );
};

export default Stats;
