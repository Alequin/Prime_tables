import React from 'react'
import Table from './../../components/table/Table.jsx'
import Cell from './../../components/table/cell/Cell.jsx'
import PrimeMultiplicationTable from "./../../PrimeMultiplicationTable"
import renderer from 'react-test-renderer'
import assert from "assert"


describe("Table component", function(){

  beforeEach(() => {

  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Table tableBuilder={new PrimeMultiplicationTable(2)}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can generate row", () => {
    let table = new Table()
    let primeTable = new PrimeMultiplicationTable(2)

    let expected = (
      <div key={0} className="row">
        <Cell key={"_"} value={"_"} info={"This is not a number"}/>
        <Cell key={2} value={2} info={"This is prime number 1"}/>
        <Cell key={3} value={3} info={"This is prime number 2"}/>
      </div>
    )
    let result = table.buildRow(primeTable, 0)
    assert.deepEqual(result, expected)
  })

  it("can generate table", () => {
  let primeTable = new PrimeMultiplicationTable(2)
    let table = new Table({tableBuilder: primeTable})
    let expected = [
      <div key={0} className="row">
        <Cell key={"_"} value={"_"} info={"This is not a number"}/>
        <Cell key={2} value={2} info={"This is prime number 1"}/>
        <Cell key={3} value={3}  info={"This is prime number 2"}/>
      </div>,

      <div key={1} className="row">
        <Cell key={2} value={2} info={"This is prime number 1"}/>
        <Cell key={4} value={4} info={"This is the product of 2 x 2"}/>
        <Cell key={6} value={6} info={"This is the product of 2 x 3"}/>
      </div>,

      <div key={2} className="row">
        <Cell key={3} value={3} info={"This is prime number 2"}/>
        <Cell key={6} value={6} info={"This is the product of 3 x 2"}/>
        <Cell key={9} value={9} info={"This is the product of 3 x 3"}/>
      </div>
    ]
    let result = table.buildTable()
    assert.deepEqual(result, expected)
  })


})
