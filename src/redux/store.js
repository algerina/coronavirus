import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';

const reducer = combineReducers({ dataReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
