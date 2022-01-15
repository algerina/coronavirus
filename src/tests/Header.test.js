import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Check page rendering', () => {
  test('Should render without error', () => {
    const header = renderer.create(<Router><Header /></Router>).toJSON();
    expect(header).toMatchSnapshot();
  });
});
