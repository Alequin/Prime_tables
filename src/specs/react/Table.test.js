import React from 'react'
import Table from './../../components/table/Table.jsx'
import Cell from './../../components/table/cell/Cell.jsx'
import renderer from 'react-test-renderer'
import assert from "assert"


describe("Table component", function(){

  beforeEach(() => {

  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Table/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can generate table", () => {
    let table = new Table({primeNumberCount: 2})
    let expected = [
        <div className="Row">
          <Cell value={" "}/>
          <Cell value={2}/>
          <Cell value={3}/>
        </div>,

        <div className="Row">
          <Cell value={2}/>
          <Cell value={4}/>
          <Cell value={6}/>
        </div>,
        
        <div className="Row">
          <Cell value={3}/>
          <Cell value={6}/>
          <Cell value={9}/>
        </div>
    ]
    let result = table.buildTable()
    assert.deepEqual(result, expected)
  })
})
