import React from "react"
import Nav from "./../nav"
import Table from "./../../components/table"

class MainPage extends React.Component{

  constructor(props){
    super(props)
    this.onClickGenerateButton = this.onClickGenerateButton.bind(this)
  }

  onClickGenerateButton(inputText){
    console.log(inputText);
  }

  render(){
    return (
      <div className="main-page">
        <Nav onClickButton={this.onClickGenerateButton}/>
        <section className="content-container">
          <Table/>
        </section>
      </div>
    )
  }
}

export default MainPage
