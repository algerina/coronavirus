import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

describe('Test for Info', () => {
  const OneCountry = {
    updated: 1642269542433,
    country: 'Afghanistan',
    countryInfo: {
      _id: 4,
      iso2: 'AF',
      iso3: 'AFG',
      lat: 33,
      long: 65,
      flag: 'https://disease.sh/assets/img/flags/af.png',
    },
    cases: 158639,
    todayCases: 0,
    deaths: 7376,
    todayDeaths: 0,
    recovered: 145906,
    todayRecovered: 0,
    active: 5357,
    critical: 1124,
    casesPerOneMillion: 3939,
    deathsPerOneMillion: 183,
    tests: 834349,
    testsPerOneMillion: 20718,
    population: 40272489,
    continent: 'Asia',
    oneCasePerPeople: 254,
    oneDeathPerPeople: 5460,
    oneTestPerPeople: 48,
    activePerOneMillion: 133.02,
    recoveredPerOneMillion: 3622.97,
    criticalPerOneMillion: 27.91,
  };

  test('', () => {
    const tree = renderer.create(
      <Router>
        <Home country={OneCountry} />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
