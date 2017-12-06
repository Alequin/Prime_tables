import React from 'react';
import MainPage from './../../components/MainPage.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<MainPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});