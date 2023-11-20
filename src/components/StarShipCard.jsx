import React from 'react';
const StarshipCard = ({ starship }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
    <div className="ship">{starship.name}</div>
  </div>
);
export default StarshipCard;