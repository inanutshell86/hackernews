import React from 'react';

const GameCard = ({ game }) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">${game.price}</span>
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

export default GameCard;
