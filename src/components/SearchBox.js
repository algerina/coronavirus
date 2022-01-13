import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountry } from '../redux/reducers/dataReducer';

const SearchBox = ({ searchfield, SearchChange }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--pink bg-lightest-pink"
      type="search"
      placeholder="Choose a country"
      onChange={SearchChange}
    />
  </div>
);

export default SearchBox;
