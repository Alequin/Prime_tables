import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

class Table extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      row: 0,
      column: 0,
    }
  }

  buildRow(tableBuilder, rowIndex){
    const row = []
    const length = tableBuilder.maxPosition
    for(let column=0; column<length; column++){
      row.push(this.buildCell(tableBuilder, rowIndex, column))
    }
    return <div key={rowIndex} className="row">{row}</div>
  }

  buildCell(tableBuilder, row, column){
    const cellValue = tableBuilder.valueAt(row, column)
    const info = tableBuilder.infoAt(row, column)
    return <Cell key={cellValue} value={cellValue} info={info}/>
  }

  buildTable(){
    const table = []
    const length = this.props.tableBuilder.maxPosition
    for(let row=0; row<length; row++){
      table.push(this.buildRow(this.props.tableBuilder, row))
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
  tableBuilder: PropTypes.object,
}

export default Table
