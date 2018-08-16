import React from 'react';
import renderer from 'react-test-renderer';
import Battle from './Battle';

it('renders default correctly', () => {
  const tree = renderer.create(<Battle />).toJSON();
  expect(tree).toMatchSnapshot();
});
