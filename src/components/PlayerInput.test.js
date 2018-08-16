import React from 'react';
import renderer from 'react-test-renderer';
import PlayerInput from './PlayerInput';

it('renders default correctly', () => {
  const tree = renderer
    .create(
      <PlayerInput
        id="1"
        label="user1"
        onSubmit={function() {
          alert('hep');
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
