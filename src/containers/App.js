import React from 'react';

import GameList from 'GameList';

const games = [
  {
    _id: 1,
    name: 'Quadropolis',
    price: '32.99',
    players: '2-4',
    duration: '60'
  },
  {
    _id: 2,
    name: 'Five Tribes',
    price: '29.99',
    players: '2-5',
    duration: '80'
  },
  {
    _id: 3,
    name: 'Terminator',
    price: '66.44',
    players: '1-2',
    duration: '50'
  },
  {
    _id: 4,
    name: 'Potter',
    price: '93.12',
    players: '3-4',
    duration: '120'
  }
];

const App = () => (
  <div className="ui container">
    <GameList games={games} />
  </div>
);

export default App;
