import React from 'react';
import TestRenderer from 'react-test-renderer';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('render  component to the DOM', () => {
  test('render Header component', async () => {
    const tree = renderer.create(
      <MemoryRouter> 
        <Header />
      </MemoryRouter>,
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
