import React from 'react';
import { PropTypes } from 'prop-types';
import './Home.css';

const Home = (props) => {
  const { country } = props;
  return (
    <div>
      <div className="country">{country.country}</div>
      <div>
        TOTAL CASES:
        {' '}
        {country.cases}
      </div>
      <div className="dark">
        Total Deaths:
        {' '}
        {country.deaths}
      </div>
      <div>
        Today cases:
        {' '}
        {country.todayCases}
      </div>
      <div className="dark">
        Today Deaths:
        {' '}
        {country.todayDeaths}
      </div>
      <div>
        Tests:
        {' '}
        {country.tests}
      </div>
      <div className="dark">
        Recovered:
        {' '}
        {country.recovered}
      </div>
      <div>
        Active cases:
        {' '}
        {country.active}
      </div>
      <div className="dark">
        Critical cases:
        {' '}
        {country.critical}
      </div>
    </div>
  );
};

Home.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
