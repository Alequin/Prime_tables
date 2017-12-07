import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

class Table extends React.Component{

  constructor(props){
    super(props)
    this.maxRows = 18
    this.maxColumns = 22
  }

  buildRow(tableBuilder, rowIndex){
    const row = []
    let length = this.props.tableBuilder.maxPosition
    if(length > this.maxColumns) length = this.maxColumns

    for(let column=0; column<length; column++){
      const cellValue = tableBuilder.valueAt(rowIndex, column)
      const info = tableBuilder.infoAt(rowIndex, column)
      row.push(<Cell key={cellValue} value={cellValue} info={info}/>)
    }
    return <div key={rowIndex} className="row">{row}</div>
  }

  buildTable(){
    const table = []
    let length = this.props.tableBuilder.maxPosition
    if(length > this.maxRows) length = this.maxRows
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
