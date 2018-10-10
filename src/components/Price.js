import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ cents }) => {
  return <span className="ui green ribbon label">$ {cents / 100}</span>;
};

Price.propTypes = {
  cents: PropTypes.number.isRequired
};

export default Price;
