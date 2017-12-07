import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

class Table extends React.Component{

  constructor(props){
    super(props)
    this.maxRows = 18
    this.maxColumns = 22
    this.setEventListeners()
    this.state = {
      x: 0,
      y: 0
    }
  }

  setEventListeners(){
    document.addEventListener("keydown", (event) => {
      switch(event.key){
        case "ArrowUp":
          this.onPressUp()
        break;
        case "ArrowDown":
          this.onPressDown()
        break;
        case "ArrowLeft":
          this.onPressLeft()
        break;
        case "ArrowRight":
          this.onPressRight()
        break;
      }
    })
  }

  onPressUp(){
    if(this.state.x > 0){
      this.setState({x: this.state.x-1})
    }
  }

  onPressDown(){
    this.setState({x: this.state.x+1})
  }

  onPressLeft(){
    if(this.state.y > 0){
      this.setState({y: this.state.y-1})
    }
  }

  onPressRight(){
    this.setState({y: this.state.y+1})
  }

  buildRow(tableBuilder, rowIndex){
    const row = []
    let length = tableBuilder.maxPosition+this.state.y
    if(length > this.maxColumns) length = this.maxColumns+this.state.y

    for(let column=this.state.y; column<length; column++){
      const cellValue = tableBuilder.valueAt(rowIndex, column)
      const info = tableBuilder.infoAt(rowIndex, column)
      row.push(<Cell key={cellValue} value={cellValue} info={info}/>)
    }
    return <div key={rowIndex} className="row">{row}</div>
  }

  buildTable(){
    const table = []
    let length = this.props.tableBuilder.maxPosition+this.state.x
    if(length > this.maxRows) length = this.maxRows+this.state.x
    for(let row=this.state.x; row<length; row++){
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
