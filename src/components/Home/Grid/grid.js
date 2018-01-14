import React from "react"
import { Link } from "react-router-dom"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="tall wide">
          <div className="about-who">
            <h3>My life & Ice cream</h3>
            <p>I am an outgoing and optimistic person who loves meeting new
            people and to encounter new cultures. I have since an early
            age travelled a lot which has inspired me to later in life
            live in other countries. Until now I have lived in France,
            Colombia and Argentina and I currently live in Stockholm where
            I grew up as well.
            </p>
            <h4><Link to="/about" style={{ textDecoration: "none" }}>&lt;More about me&gt;</Link></h4>
          </div>
        </div>
        <div className="tall wide">
          <div className="about-projects">
            <h3>The ongoing development</h3>
            <p>Short intro of my web development projects</p>
            <h4><Link to="/projects" style={{ textDecoration: "none" }}>&lt;More on my projects&gt;</Link></h4>
          </div>
        </div>
      </div>

    )
  }

}

export default Grid
