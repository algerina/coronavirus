import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCountry, getCountries } from '../redux/reducers/dataReducer';

const SearchBox = ({ setSearchTerm }) => {
  // const dispatch = useDispatch();
  // const countries = useSelector((state) => state.dataReducer);


  return (
  <div className="pa2">
    <input
      className="pa3 ba b--pink bg-lightest-pink"
      type="search"
      placeholder="Choose a country"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
)
}

export default SearchBox;