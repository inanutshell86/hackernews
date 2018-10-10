import React from 'react';
import { render } from 'react-dom';

import GameCard from 'GameCard';

import 'semantic-ui-css/semantic.min.css';

const games = [
  {
    name: 'Quadropolis',
    price: '32.99',
    players: '2-4',
    duration: '60'
  },
  {
    name: 'Five Tribes',
    price: '29.99',
    players: '2-5',
    duration: '80'
  }
];

render(<GameCard game={games[1]} />, document.getElementById('root'));
