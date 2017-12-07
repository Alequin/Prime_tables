import React from "react"
import Nav from "./../nav/Nav.jsx"
import Table from "./../../components/table/Table.jsx"
import PrimeMultiplicationTable from "./../../PrimeMultiplicationTable.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.onClickGenerateButton = this.onClickGenerateButton.bind(this)
    this.state = {
      primeTable: new PrimeMultiplicationTable(3)
    }
  }

  onClickGenerateButton(inputText){
    this.setState({
      primeTable: new PrimeMultiplicationTable(parseInt(inputText))
    })
  }

  render(){
    return (
      <div className="main-page">
        <Nav onClickButton={this.onClickGenerateButton}/>
        <section className="content-container">
          <Table tableBuilder={this.state.primeTable}/>
        </section>
      </div>
    )
  }
}

export default MainPage
