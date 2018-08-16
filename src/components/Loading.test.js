import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

it('renders default correctly', () => {
  const tree = renderer
    .create(<Loading text="downloading" speed={100} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
