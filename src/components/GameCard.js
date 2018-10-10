import React from 'react';

const GameCard = () => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label">$32.99</span>
      <img src="https://picsum.photos/100/100" alt="game cover" />
    </div>
    <div className="content">
      <a href="#" className="header">
        Quadropolis
      </a>
      <div className="meta">
        <i className="icon users" />
        2-4&nbsp;
        <i className="icon wait" />
        60 min
      </div>
    </div>
  </div>
);

export default GameCard;
