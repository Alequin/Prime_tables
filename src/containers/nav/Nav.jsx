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

  handleButtonClick(){
    this.props.onClickButton(this.state.inputText)
  }

  onChangeInputBox(event){
    this.setState({
      inputText: event.target.value
    })
  }

  render(){
    return (
      <div>
      <nav className="nav-bar">
        <label>
          <h2>Enter how many prime numbers you wish to generate</h2>
          <div className="align-center-container">
            <input
              className="input"
              type="number"
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
      </nav>
      <div className="nav-spacer"></div>
    </div>
    )
  }
}

Nav.propTypes = {
  onClickButton: PropTypes.func,
};

export default Nav
