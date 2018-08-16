import React from 'react';
import renderer from 'react-test-renderer';
import PlayerPreview from './PlayerPreview';

it('renders default correctly', () => {
  const props = {
    avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
    username: 'react',
    id: 'react',
  };

  const tree = renderer
    .create(
      <PlayerPreview
        {...props}
        onReset={function() {
          alert();
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
