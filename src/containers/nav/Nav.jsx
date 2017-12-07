import React from "react"
import PropTypes from 'prop-types'

class Nav extends React.Component{

  constructor(props){
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.onChangeInputBox = this.onChangeInputBox.bind(this)
    this.state = {
      inputText: ""
    }
  }

  componentDidMount(){
    this.inputBox = document.querySelector(".input")
  }

  handleButtonClick(event){
    event.preventDefault()
    if( !(/\./.test(this.state.inputText)) ){
      this.inputBox.style.borderColor = ""
      this.props.onClickButton(this.state.inputText)
    }else{
      this.inputBox.style.borderColor = "red"
    }
  }

  onChangeInputBox(event){
    this.setState({
      inputText: event.target.value
    })
  }

  render(){
    return (
      <nav className="nav-bar">
        <form>
          <label>
            <h2>Enter how many prime numbers you wish to generate</h2>
            <div className="align-center-container">
              <input
                className="input"
                type="number"
                step=".01"
                value={this.state.inputText}
                onChange={this.onChangeInputBox}
              />
            </div>
          </label>
          <div className="align-center-container">
            <input
              className="button"
              type="submit"
              value="Generate prime number multiplication table"
              onClick={this.handleButtonClick}
            />
          </div>
        </form>
      </nav>
    )
  }
}

Nav.propTypes = {
  onClickButton: PropTypes.func,
}

export default Nav
