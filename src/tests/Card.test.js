
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Card from './components/Card';

afterEach(() => {
  cleanup();
});

describe('render  component to the DOM', () => {
  test('render Card component', async () => {
    render(<Provider store={store}><Card /></Provider>);
  });
});