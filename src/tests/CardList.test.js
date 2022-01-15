import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CardList from '../components/CardList';
import store from '../redux/store';

describe('Describe', () => {
  test('shoudl match snapShot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <CardList />
        </Router>
      </Provider>,
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
