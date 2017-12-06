import React from 'react';
import Nav from './../../components/nav/Nav.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Nav/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
