import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
import SearchBox from './SearchBox';
import Header from './Header';
import { getCountriesAsync } from '../redux/reducers/dataReducer';

const CardList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(getCountriesAsync());
  }, []);

  return (
    <div>
      <Header />
      <SearchBox setSearchTerm={setSearchTerm} />
      {
      countries
        .filter((country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((item) => (
          <>
            <Link key={item.country} to={item.country}>
              <Card
                key={item.country}
                id={item.countryInfo}
                data={item}
              />
            </Link>
          </>
        ))
    }

    </div>
  );
};
export default CardList;
