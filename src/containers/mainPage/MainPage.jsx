import React from "react"
import Nav from "./../nav/Nav.jsx"
import ArrowTable from "./../../components/table/ArrowTable.jsx"
import PrimeMultiplicationTable from "./../../PrimeMultiplicationTable.js"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.onClickGenerateButton = this.onClickGenerateButton.bind(this)
    this.state = {
      primeTable: this.newPrimeTableBuilder(3)
    }
  }

  newPrimeTableBuilder(primeNumberCount){
    return new PrimeMultiplicationTable(primeNumberCount)
  }

  onClickGenerateButton(inputText){
    this.setState({
      primeTable: this.newPrimeTableBuilder(parseInt(inputText))
    })
  }

  render(){
    return (
      <div className="main-page">
        <Nav onClickButton={this.onClickGenerateButton}/>
        <section className="content-container">
          <ArrowTable tableBuilder={this.state.primeTable}/>
        </section>
      </div>
    )
  }
}

export default MainPage
