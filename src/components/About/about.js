import React from "react"
// import { Link } from "react-router-dom"
// import Name from "../Home/Name/name"
import Navigation from "../Navigation/navigation"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        {/* <Name /> */}
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
              <p>
                  I highly enjoy cultural interaction and meeting new people,
                  therefore I try to travel whenever I have the time and the opportunity.
                  I find myself an adventurous person and I have seen a lot of
                  places around the world thoughout my life.
              </p>
            </div>
          </div>
          <div className="wide tall">
            <div className="text-box">
              <h3>personality & interests</h3>
              <p>
                  I spend a few hours weekly on exercising everything from yogo to
                  spinning and weightlifting. I find it important to have an active
                  lifestyle as it gives energy, enjoyment and strength to your life.
              </p>
              <p>
                  When I was a child I used to only wear pink, preferrably
                  dresses or skirts, I know, very girly. Since then I have added
                  other colors and type of clothes to my wardrob but I still
                  pursue my interested in dresses by designing dresses for myself.
              </p>
            </div>
          </div>
          <div className="wide tall-2">
            <div className="text-box">
              <h3>I <span role="img" aria-label="heart">❤️</span> Ice cream</h3>
              <p>
                  I have a serious weekness for ice cream,
                  mostly eating but also make homemade ice cream.
                  My prefered flavour in Pecan nut caramel
                <span role="img" aria-label="yum"> 😋</span>.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="link-box"><Link to="/work"
        style={{ textDecoration: "none" }}>
        <h2>Back to my projects</h2></Link></div>
        <div className="link-box"><Link to="/contact"
        style={{ textDecoration: "none" }}>
        <h2>Contact me</h2></Link></div> */}
      </div>
    )
  }
}

export default About

// &#10148;
