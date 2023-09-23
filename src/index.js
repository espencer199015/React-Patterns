import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import dogsData from './data/dogsData';
import colorsData from './data/colorsData';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App dogs={dogsData} colors={colorsData} />
  </Router>,
  rootElement
);