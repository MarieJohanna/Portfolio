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
                <h3>Education & Experience</h3>
                <p>
                  To pursue my interest in web development and to stimulate
                  my creativity I recently took a 12 weeks long
                  coding Boot Camp covering HTML, CSS, JavaScript
                  including React and node which I took at <a href="www.technigo.io">Technigo</a>.
                </p>
                <p>
                  After completing my business degree I started my career in Finance working with
                  Treasury at Swedish multinational companies. After 5 years I decided to try
                  business/it consulting at a FinTech consultancy firm. The IT involvement in
                  all my previsous roles was starting point for my web development interest.
                </p>
              </div>
            </div>
            <div className="wide tall-2">
              <div className="text-box">
                <h3>Travel</h3>
              </div>
            </div>
            <div className="tall-5 link-box">
              <Link to="/work" style={{ textDecoration: "none" }}>
                <span><h2>W</h2></span>
                <span><h2>O</h2></span>
                <span><h2>R</h2></span>
                <span><h2>K</h2></span>
                <span><h2>&#62;</h2></span>
              </Link>
            </div>
            <div className="wide tall">
              <div className="text-box">
                <h3>personality</h3>
              </div>
              <div className="text-box">
                <h3>interests</h3>
              </div>
            </div>
            <div className="wide tall-2">
              <div className="text-box">
                <h3>Ice cream</h3>
              </div>
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

// &#10148;
