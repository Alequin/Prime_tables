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
    let length = tableBuilder.maxPosition+this.state.column
    if(length > this.maxColumns) length = this.maxColumns+this.state.column

    for(let column=this.state.column; column<length; column++){
      const cellValue = tableBuilder.valueAt(rowIndex, column)
      const info = tableBuilder.infoAt(rowIndex, column)
      row.push(<Cell key={cellValue} value={cellValue} info={info}/>)
    }
    return <div key={rowIndex} className="row">{row}</div>
  }

  buildTable(){
    const table = []
    let length = this.props.tableBuilder.maxPosition+this.state.row
    if(length > this.maxRows) length = this.maxRows+this.state.row
    for(let row=this.state.row; row<length; row++){
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
