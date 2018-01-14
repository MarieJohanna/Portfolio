import React from "react"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="grid-container">
        <div className="tall wide">
          <div className="about-who">
            <h3>About me</h3>
            <p>My name is Marie and I am a web developer..
            </p>
          </div>
        </div>
        <div className="tall wide">
          <div className="about-projects">
            <h3>development</h3>
            <p>Short intro of my web development projects</p>
          </div>
        </div>
      </div>

    )
  }

}

export default Grid
