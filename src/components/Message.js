import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ header, content, type }) => {
  return (
    <div className={'ui icon message ' + type}>
      <i
        className={
          'icon ' +
          (type === 'negative' ? 'exclamation triangle' : 'thumbs up outline')
        }
      />
      <div className="content">
        <div className="header">{header}</div>
        <p>{content}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

Message.defaultProps = {
  header: '',
  content: '',
  type: 'info'
};

export default Message;
