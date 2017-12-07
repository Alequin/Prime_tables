import React from "react"
import Nav from "./../nav"

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
      <div>
        <Nav onClickButton={this.onClickGenerateButton}/>
        <section className="content-container">
          This is the main section
        </section>
      </div>
    )
  }
}

export default MainPage
