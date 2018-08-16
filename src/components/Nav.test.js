import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from './Nav';

it('renders default correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Route>
          <Nav />
        </Route>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
