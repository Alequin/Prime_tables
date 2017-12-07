import React from 'react';
import Table from './../../components/table/Table.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Table/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
