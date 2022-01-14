
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Header from '../components/Header';

afterEach(() => {
  cleanup();
});

describe('render  component to the DOM', () => {
  test('render Header component', async () => {
    render(<Provider store={store}><Header /></Provider>);
  });
});