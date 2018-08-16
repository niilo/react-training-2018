import React from 'react';
import renderer from 'react-test-renderer';
import Results from './Results';

beforeEach(() => {
  window.fetch = jest.genMockFunction();
});

it('renders default correctly', () => {
  window.fetch
    .mockReturnValueOnce(Promise.resolve(new Response('{}')))
    .mockReturnValue(Promise.resolve(new Response('{}')));
  const tree = renderer.create(<Results />).toJSON();
  expect(tree).toMatchSnapshot();
});
