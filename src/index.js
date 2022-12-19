import React from 'react'
import * as ReactDOMClient from "react-dom/client"

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse is over")
const helpText = "HELP TEXT"

const elements = (<div className='name'>
    <h1>{helpText}</h1>
    <input placeholder={helpText} 
      onClick={inputClick} onMouseOver={mouseOver}/>
    <p>{helpText === "help" ? "Yes" : "No"}</p>
</div>)

const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(elements)