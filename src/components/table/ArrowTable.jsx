import React from "react"
import Table from "./Table.jsx"
import Cell from "./cell/Cell.jsx"

class ArrowTable extends Table{

  constructor(props){
    super(props)
    this.maxRows = 10
    this.maxColumns = 10
    this.setEventListeners()

    this.onChangeXMoveInput = this.onChangeXMoveInput.bind(this)
    this.onChangeYMoveInput = this.onChangeYMoveInput.bind(this)
    this.onClickMove = this.onClickMove.bind(this)

    this.state = Object.assign(this.state, {
      rowInput: 0,
      columnInput: 0,
    })
  }

  setEventListeners(){
    document.addEventListener("keydown", (event) => {
      const key = event.key
      switch(key){
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
    if(this.state.row > 0){
      this.setState({row: this.state.row-1})
    }
  }

  onPressDown(){
    if(this.state.row+this.maxRows < this.props.tableBuilder.maxPosition){
      this.setState({row: this.state.row+1})
    }
  }

  onPressLeft(){
    if(this.state.column > 0){
      this.setState({column: this.state.column-1})
    }
  }

  onPressRight(){
    if(this.state.column+this.maxColumns < this.props.tableBuilder.maxPosition){
      this.setState({column: this.state.column+1})
    }
  }


  onChangeXMoveInput(event){
    this.setState({
      rowInput: parseInt(event.target.value)
    })
  }

  onChangeYMoveInput(event){
    this.setState({
      columnInput: parseInt(event.target.value)
    })
  }

  onClickMove(){
    this.setState({
      row: this.state.rowInput,
      column: this.state.columnInput
    })
  }

  renderInstantMovementControls(){
    return (
      <div>
        <label>Row<input type="number" value={this.state.rowInput} onChange={this.onChangeXMoveInput}/></label>
        <label>Column<input type="number" value={this.state.columnInput} onChange={this.onChangeYMoveInput}/></label>
        <input type="submit" value="Jump to position" onClick={this.onClickMove}/>
      </div>
    )
  }

  buildRow(tableBuilder, rowIndex){
    const row = []
    let length = tableBuilder.maxPosition+this.state.column
    if(length > this.maxColumns) length = this.maxColumns+this.state.column

    for(let column=this.state.column; column<length; column++){
      row.push(this.buildCell(tableBuilder, rowIndex, column))
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
        {this.renderInstantMovementControls()}
        {this.buildTable()}
      </section>
    )
  }
}

export default ArrowTable
