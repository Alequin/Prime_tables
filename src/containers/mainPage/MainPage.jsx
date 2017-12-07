import React from "react"
import Nav from "./../nav/Nav.jsx"
import Table from "./../../components/table/Table.jsx"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.onClickGenerateButton = this.onClickGenerateButton.bind(this)
    this.state = {
      primeNumberCount: 3
    }
  }

  onClickGenerateButton(inputText){
    this.setState({
      primeNumberCount: parseInt(inputText)
    })
  }

  render(){
    return (
      <div className="main-page">
        <Nav onClickButton={this.onClickGenerateButton}/>
        <section className="content-container">
          <Table primeNumberCount={this.state.primeNumberCount}/>
        </section>
      </div>
    )
  }
}

export default MainPage
