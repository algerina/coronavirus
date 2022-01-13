import axios from 'axios';
import { getCountries } from '../redux/reducers/dataReducer';

const baseUrl = 'https://corona.lmao.ninja/v2/countries?yesterday&sort';

const fetchCountries = () => async (dispatch) => {
  const result = await axios.get(baseUrl);
  dispatch(getCountries(result.data._id.countries));
};

export default fetchSates;
