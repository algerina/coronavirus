import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/store';

afterEach(() => {
  cleanup();
});

describe('App test', () => {
  test('Testing App component', () => {
    const app = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(app).toMatchSnapshot();
  });

  test('Testing App component', () => {
    const app = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(app.children).not.toBeNull();
  });
});
