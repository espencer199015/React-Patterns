import React, { useState, useEffect } from 'react';
import fetchDogs from '../api/fetchDogs'; // Assume this function fetches the dog data

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
      } catch (error) {
        setError('Error fetching dog data.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Dogs</h2>
      {/* Render dog list */}
    </div>
  );
};

export default DogList;