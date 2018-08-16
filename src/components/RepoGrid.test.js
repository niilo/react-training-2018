import React from 'react';
import renderer from 'react-test-renderer';
import RepoGrid from './RepoGrid';

it('renders default correctly', () => {
  const props = {
    repos: [
      {
        name: 'react',
        html_url: 'https://github.com/facebook/react',
        stargazers_count: 73600,
        owner: {
          login: 'facebook',
          avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
        },
      },
      {
        name: 'react2',
        html_url: 'https://github.com/facebook/react',
        stargazers_count: 73600,
        owner: {
          login: 'facebook',
          avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
        },
      },
    ],
  };

  const tree = renderer.create(<RepoGrid {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
