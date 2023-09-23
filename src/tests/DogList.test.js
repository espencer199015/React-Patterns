import React from 'react';
import { render } from '@testing-library/react';
import DogList from '../components/DogList';

test('renders dog names', () => {
  const dogs = [
    { name: 'Whiskey', age: 5 },
    { name: 'Duke', age: 3 }
  ];
  const { getByText } = render(<DogList dogs={dogs} />);
  const whiskeyElement = getByText(/Whiskey/i);
  const dukeElement = getByText(/Duke/i);
  expect(whiskeyElement).toBeInTheDocument();
  expect(dukeElement).toBeInTheDocument();
});