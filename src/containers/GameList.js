import React from 'react';
import PropTypes from 'prop-types';

import GameCard from 'GameCard';

const GameList = ({ games }) => (
  <div className="ui four cards">
    {games.map(game => (
      <GameCard game={game} key={game._id} />
    ))}
  </div>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameList;
