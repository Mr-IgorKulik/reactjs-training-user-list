import React from 'react'
import Header from './components/Header'
import Image from './components/Image'
import logo from './img/logo.jpg'

class App extends React.Component {
  helpText = "HELP TEXT"
  render() {
    return (<div className='name'>
        <Header title="Header"/>
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText} 
        onClick={this.inputClick} onMouseOver={this.mouseOver}/>
        <p>{this.helpText === "help" ? "Yes" : "No"}</p>
        <Image src={logo}/>
    </div>)
  }

  inputClick() {console.log("Clicked")}
  mouseOver() {console.log("Mouse is over")}
}

export default App