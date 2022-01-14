import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import SearchBox from './SearchBox';
import Header from './Header';
import World from './World';
import { getCountriesAsync } from '../redux/reducers/dataReducer';

const CardList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(getCountriesAsync());
    }, []);

    const dispatch = useDispatch();
    let countries = useSelector((state) => state.dataReducer);

    // const searchChange = (e) => {
    //   const searchTerm = e.target.value;
  
    if (searchTerm.length > 0) {
      countries = countries.filter((country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    //   return countries;
    // }

    return (
        <div>
            <Header />
            <SearchBox setSearchTerm={setSearchTerm} />
            <World />
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