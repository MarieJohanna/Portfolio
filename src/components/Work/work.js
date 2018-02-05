import React from "react"
// import { Link } from "react-router-dom"
import Navigation from "../Navigation/navigation"
import "./work.css"
import cssgrid1 from "./../../images/cssgrid1.png"
import habittracker from "./../../images/habit-tracker2.png"
import santacss from "./../../images/santacss.png"

export default class Work extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className="collection-work">
          <div className="container-work">
            <a href="https://mariejohanna.github.io/CSS-Grid/" style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank">
              <h3>CSS-Grid - KLAR</h3>
              <div className="project-image-cssgrid" style={{ backgroundImage: `url(${cssgrid1})` }} />
              <div>
                <p>Using CSS-grid to create to create the structure of
              boxes and then style each box with its different
              features such as images, different font size and structure.
                </p>
                <p className="italic">Language used: React, HTML5, CSS</p>
              </div>
            </a>
          </div>
          <div className="container-work">
            <a href="https://mariejohanna.github.io/Habit-Tracker/" style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank">
              <h3>Habit-Tracker - KLAR</h3>
              <div className="project-image-habittracker" style={{ backgroundImage: `url(${habittracker})` }} />
              <div>
                <p>As a group project we decided to build a habit tracker
                for children who require a more structured everyday life.
                We have facilited the view and user interaction with designated
                color for each weekday.
                </p>
                <p className="italic">Language used: React, JavaScript, HTML5, CSS</p>
              </div>
            </a>
          </div>
          <div className="container-work">
            <h3>Sveriges radio</h3>
            <div className="project-image-sr" style={{ backgroundImage: `url(${cssgrid1})` }} />
            <div>
              <p>Using Sverige&apos;s radio&apos;s API to create a page where you can
              listen to the radio station provided by Sweden&apos;s public service.
              </p>
              <p className="italic">Language used: React, JavaScript, HTML5, CSS</p>
            </div>
          </div>
          <div className="container-work">
            <a href="https://santagodjul.netlify.com/" style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank">
              <h3>CSS-Santa - KLAR</h3>
              <div className="project-image-santacss" style={{ backgroundImage: `url(${santacss})` }} />
              <div>
                <p>Just before Christmas we had a small competition to create a Santa
                only using HTML and CSS. I decided to try to use CSS-grid and create
                reusable classes to style my Santa. You can find the result
                here: <a target="_blank" rel="noopener noreferrer" href="https://santagodjul.netlify.com/">CSS-Santa</a>
                </p>
                <p className="italic">Language used: HTML5, CSS, JavaScript</p>
              </div>
            </a>
          </div>
          <div className="container-work">
            <a href="https://mariejohanna.github.io/check-weather/" style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank">
              <h3>Check the weather in..</h3>
              <div className="project-image-weather" style={{ backgroundImage: `url(${cssgrid1})` }} />
              <div>
                <p>The website calls an API to check current weather in different preset cities</p>
                <p className="italic">Language used: HTML5, CSS</p>
              </div>
            </a>
          </div>
        </div>
        {/* <div className="link-box"><Link to="/about" style={{ textDecoration: "none" }}>
        <h2>Learn more About me</h2></Link></div> */}
      </div>
    )
  }
}
