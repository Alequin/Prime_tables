import React from 'react';
import Cell from './../../components/table/cell/Cell.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Cell value={5}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
