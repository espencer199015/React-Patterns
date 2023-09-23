import React from 'react';

const ColorDetails = ({ match }) => {
  const color = match.params.color;

  return (
    <div>
      <h2>{color}</h2>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }} />
    </div>
  );
};

export default ColorDetails;