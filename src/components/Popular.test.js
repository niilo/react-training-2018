import React from 'react';
import renderer from 'react-test-renderer';
import Popular from './Popular';

beforeEach(() => {
  window.fetch = jest.genMockFunction();
});

it('renders default correctly', () => {
  window.fetch.mockReturnValueOnce(Promise.resolve(new Response('{}')));
  const tree = renderer.create(<Popular />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders selected Javascriot correctly', () => {
  window.fetch.mockReturnValueOnce(Promise.resolve(new Response('{}')));
  const lang = 'JavaScript';
  const tree = renderer.create(<Popular lang={lang} />).toJSON();
  expect(tree).toMatchSnapshot();
});
