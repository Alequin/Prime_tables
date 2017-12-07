import React from "react"
import Cell from "./cell/Cell.jsx"

class Table extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <section className="table-container">
        <Cell value={2}/>
        <Cell value={4}/>
        <Cell value={6}/>
      </section>
    )
  }
}

export default Table
