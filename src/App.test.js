import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status,
      statusText,
      headers: {
        'Content-type': 'application/json',
      },
    });
  };

  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve(
      mockResponse(
        200,
        null,
        `{
        "repos": [
          {
            "name": "react",
            "html_url": "https://github.com/facebook/react",
            "stargazers_count": 73600,
            "owner": {
              "login": "facebook",
              "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4"
            }
          },
          {
            "name": "react2",
            "html_url": "https://github.com/facebook/react",
            "stargazers_count": 73600,
            "owner": {
              "login": "facebook",
              "avatar_url": "https://avatars3.githubusercontent.com/u/69631?v=4"
            }
          }
        ]
      }`,
      ),
    ),
  );

  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
