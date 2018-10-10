import React from 'react';
import PropTypes from 'prop-types';

import GameCard from 'GameCard';
import Message from 'Message';

const GameList = ({ games }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <Message
        header="There are no game in your store"
        content="You should add some, don't you think?"
        // type="negative"
      />
    ) : (
      games.map(game => <GameCard game={game} key={game._id} />)
    )}
  </div>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GameList.defaultProps = {
  games: []
};

export default GameList;
