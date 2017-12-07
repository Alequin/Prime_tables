import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

import PrimeMultiplicationTable from "./../../PrimeMultiplicationTable.js"

class Table extends React.Component{

  constructor(props){
    super(props)
    this.primeTable = new PrimeMultiplicationTable(this.props.primeNumberCount)
  }

  buildTable(){
    const length = this.props.primeNumberCount+1
    const table = []
    for(let row=0; row<length; row++){
      const currentRow = []
      table.push(currentRow)
      for(let column=0; column<length; column++){
        currentRow.push(
          <Cell value={this.primeTable.valueAt(row, column)}/>
        )
      }
    }
    return table
  }

  render(){
    return (
      <section className="table-container">

      </section>
    )
  }
}

Table.propTypes = {
  primeNumberCount: PropTypes.number,
}

export default Table
