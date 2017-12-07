import React from "react"

class Cell extends React.Component{

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(){
    alert(this.props.info)
  }

  render(){
    return (
      <div className="cell-container" onClick={this.onClick}>
        {this.props.value}
      </div>
    )
  }
}

export default Cell
