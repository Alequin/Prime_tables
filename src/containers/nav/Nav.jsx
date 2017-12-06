import React from "react"

class Nav extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <nav className="nav-bar">
        <label>
          <h2>Enter how many prime numbers you wish to generate</h2>
          <div className="align-center-container">
            <input className="input" type="number"/>
          </div>
        </label>
        <div className="align-center-container">
          <input className="button" type="submit" value="Generate prime number multiplication table"/>
        </div>
      </nav>
    )
  }
}

export default Nav
