import React from "react"
import Nav from "./../nav"

class MainPage extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Nav />
        <section className="content-container">
          This is the main section
        </section>
      </div>
    )
  }
}

export default MainPage
