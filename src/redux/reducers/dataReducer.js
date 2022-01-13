import axios from 'axios';

const GET_COUNTRIES = 'coronavirus/redux/reducers/GET_COUNTRIES';
const GET_CURRENT_COUNTRY = 'coronavirus/redux/reducers/GET_CURRENT_COUNTRY';
const SEARCH_COUNTRY = 'coronavirus/redux/reducers/SEARCH_COUNTRY';

const baseUrl = 'https://corona.lmao.ninja/v2/countries?yesterday&sort';

const initialState = [
  {
    id: 0,
    country: 'Algeria',
    cases: '3000',
    Deaths: '300',
    Recovered: '20',
    countryInfo: {
      _id: 0,
      iso3: 'afg',
      flag: 'text',
    }
  },
  {
    id: 1,
    country: 'whatever',
    cases: '3000',
    Deaths: '300',
    Recovered: '20',
    countryInfo: {
      _id: 1,
      iso3: 'ajt',
      flag: 'text',
    }
  },
];

export const searchCountry = (query) => ({ type: SEARCH_COUNTRY, payload: query });

export const getCountries = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountriesAsync = () => {
  return ((dispatch) => {
    axios.get(baseUrl).then((res) => { dispatch(getCountries(res.data)) })

  })

}

export const getCurrentCountry = (payload) => ({
  type: GET_CURRENT_COUNTRY,
  payload,
});

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      const newState = [...action.payload]
           return newState
    };

    case SEARCH_COUNTRY:
      return {
        ...state,
        searchCountry: action.payload,
      };

    case GET_CURRENT_COUNTRY:
      return {
        ...state,
        currentState: state.countries.filter((country) => country.id === action.payload)[0],
      };

    default:
      return state;
  }
};

export default dataReducer;
