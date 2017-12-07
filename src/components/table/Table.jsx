import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

import PrimeMultiplicationTable from "./../../PrimeMultiplicationTable.js"

class Table extends React.Component{

  constructor(props){
    super(props)
  }

  buildRow(primeTable, rowIndex){
    const row = []
    const length = primeTable.primeNumbers.length+1
    for(let column=0; column<length; column++){
      const cellValue = primeTable.valueAt(rowIndex, column)
      row.push(<Cell key={cellValue} value={cellValue}/>)
    }
    return <div key={rowIndex} className="row">{row}</div>
  }

  buildTable(){
    const primeTable = new PrimeMultiplicationTable(this.props.primeNumberCount)
    const length = this.props.primeNumberCount+1
    const table = []

    for(let row=0; row<length; row++){
      const currentRow = []
      for(let column=0; column<length; column++){
        const cellValue = primeTable.valueAt(row, column)
        currentRow.push(<Cell key={cellValue} value={cellValue}/>)
      }
      table.push(<div key={row} className="row">{currentRow}</div>)
    }
    return table
  }

  render(){
    return (
      <section className="table-container">
        {this.buildTable()}
      </section>
    )
  }
}

Table.propTypes = {
  primeNumberCount: PropTypes.number,
}

export default Table
