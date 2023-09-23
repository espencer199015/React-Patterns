import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = ({ addColor }) => {
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is a valid color
    if (!/^#[0-9A-Fa-f]{6}$/i.test(color)) {
      setError('Please enter a valid color code (e.g., #FF5733).');
      return;
    }

    // Clear any previous error
    setError('');

    addColor(color);
    history.push('/colors');
  };

  return (
    <div className="container">
      <h2>Add Color</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter a color code (e.g., #FF5733)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default ColorForm;