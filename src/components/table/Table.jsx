import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

class Table extends React.Component{

  constructor(props){
    super(props)
  }

  buildRow(tableBuilder, rowIndex){
    const row = []
    const length = tableBuilder.maxPosition

    for(let column=0; column<length; column++){
      const cellValue = tableBuilder.valueAt(rowIndex, column)
      row.push(<Cell key={cellValue} value={cellValue}/>)
    }
    return <div key={rowIndex} className="row">{row}</div>
  }

  buildTable(){
    const table = []
    for(let row=0; row<this.props.tableBuilder.maxPosition; row++){
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
