import React from 'react';
import PropTypes from 'prop-types';

import Price from 'Price';

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <Price cents={game.price} />
      <img src="https://picsum.photos/100/100" alt="game cover" />
    </div>
    <div className="content">
      <a href="#" className="header">
        {game.name}
      </a>
      <div className="meta">
        <i className="icon users" />
        {game.players}
        &nbsp;
        <i className="icon wait" />
        {game.duration} min
      </div>
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};

export default GameCard;
