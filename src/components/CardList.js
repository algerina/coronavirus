import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import SearchBox from './SearchBox';
import Header from './Header';
import { getCountriesAsync } from '../redux/reducers/dataReducer';

const CardList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  let countries = useSelector((state) => state.dataReducer);

  useEffect(() => {
    dispatch(getCountriesAsync());
  }, []);

  if (searchTerm.length > 0) {
    countries = countries.filter((country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return (
    <div>
      <Header />
      <SearchBox setSearchTerm={setSearchTerm} />
      <div>
        {countries.map(country => {
                    if (country.countryInfo.iso3) {
                        return (
                            <Card
                                key={country.countryInfo.iso3}
                                id={country.countryInfo._id}
                                data={country}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};
export default CardList;