import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders default correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Route>
          <Home />
        </Route>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
