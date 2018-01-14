import React from "react"
import { Link } from "react-router-dom"
// import Name from "../Home/Name/name"
import Navigation from "../Navigation/navigation"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        {/* <Name /> */}
        <div className="about-component">
          <div className="about-container">
            <div className="wide tall">
              <div className="text-box">
                <h1>Education</h1>
              </div>
              <div className="text-box">
                <h1>Experience</h1>
              </div>
            </div>
            <div className="wide tall-2">
              <h1>Travel</h1>
            </div>
            <div className="tall-5 link-box">
              <Link to="/work" style={{ textDecoration: "none" }}>
                <span><h1>W</h1></span>
                <span><h1>O</h1></span>
                <span><h1>R</h1></span>
                <span><h1>K</h1></span>
                <span><h1>&#10148;</h1></span>
              </Link>
            </div>
            <div className="wide tall">
              <div className="text-box">
                <h1>personality</h1>
              </div>
              <div className="text-box">
                <h1>interests</h1>
              </div>
            </div>
            <div className="wide tall-2">
              <h1>Ice cream</h1>
            </div>
            {/* <div className="wide tall">1</div>
            <div className="wide">1</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default About
