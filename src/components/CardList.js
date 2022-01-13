import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import SearchBox from './SearchBox';
import Header from './Header';
import { getCountriesAsync } from '../redux/reducers/dataReducer';


const CardList = () => {
    useEffect(() => {
        dispatch(getCountriesAsync())
    }, [])
    const dispatch = useDispatch();
    const Cards = useSelector((state) => state.dataReducer);
    return (
  <div>
          <Header />
        <SearchBox />
  <div>
    {
            Cards.map((country) => {
                if (country.countryInfo.iso3) {
                    console.log(country);
                     return (
              <Card
                key={country.countryInfo.iso3}
                id={country.countryInfo._id}
                data={country}
              />
            )
                }
               })
        }
  </div>
  </div>
);
}
export default CardList;
