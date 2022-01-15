import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ setSearchTerm }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--pink bg-lightest-pink"
      type="search"
      placeholder="Choose a country"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

SearchBox.propTypes = {
  setSearchTerm: PropTypes.instanceOf(Object).isRequired,
};

export default SearchBox;
