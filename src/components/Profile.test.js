import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

it('renders default correctly', () => {
  const props = {
    info: {
      name: 'react',
      location: 'location',
      company: 'Facebook',
      followers: 1,
      following: 1,
      public_repos: 2,
      html_url: 'https://github.com/facebook/react',
      stargazers_count: 73600,
      login: 'facebook',
      blog: 'https://github.com/facebook/react',
      avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
    },
  };

  const tree = renderer.create(<Profile {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
