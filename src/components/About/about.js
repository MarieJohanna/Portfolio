import React from "react"
import Name from "../Home/Name/name"
import Navigation from "../Navigation/navigation"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Name />
        <div className="about-container">
          <div className="wide tall">1</div>
          <div className="wide">2</div>
          <div className="wide tall">5</div>
          <div className="wide tall">6</div>
          <div className="wide tall">1</div>
          <div className="wide">1</div>
        </div>
      </div>
    )
  }
}

export default About
