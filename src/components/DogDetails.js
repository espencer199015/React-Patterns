import React from 'react';

const DogDetails = ({ dogs, match }) => {
  const dogName = match.params.name;
  const dog = dogs.find(dog => dog.name === dogName);

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;