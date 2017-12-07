import React from "react"
import PropTypes from 'prop-types'
import Cell from "./cell/Cell.jsx"

class Table extends React.Component{

  constructor(props){
    super(props)
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
