import React from "react"

class Cell extends React.Component{
  render(){
    return (
      <div className="cell-container">
        {this.props.value}
      </div>
    )
  }
}

export default Cell
