import React from 'react'
import Header from './components/Header'
import Image from './components/Image'
import logo from './img/logo.jpg'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "HELP TEXT",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
    }

    render() {
        return (<div className='name'>
            <Header title="Header"/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText} 
            onChange={event => this.setState({userData: event.target.value})}
            onClick={this.inputClick} onMouseOver={this.mouseOver}/>
            <p>{this.state.helpText === "help" ? "Yes" : "No"}</p>
            <Image src={logo}/>
        </div>)
    }

    inputClick() {
        this.setState({helpText: "NEW HELP TEXT"})
        console.log("Clicked")
    }
    mouseOver() {console.log("Mouse is over")}
}

export default App