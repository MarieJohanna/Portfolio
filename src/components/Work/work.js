import React from "react"
import { Link } from "react-router-dom"
import Navigation from "../Navigation/navigation"
import "./work.css"
import cssgrid from "./../../images/cssgrid1.png"

export default class Work extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className="collection-work">
          <div className="container-work">
            <h3>CSS-Grid</h3>
            <img className="image-work" src={cssgrid} alt="css-grid" />
            <div>
              <p>Using CSS-grid to create to create the structure of
              boxes and then style each box with its different
              features such as images, different font size and structure.
              </p>
              <p className="italic">Language used: React, HTML5, CSS</p>
            </div>
          </div>
          <div className="container-work">
            <h3>Habit-Tracker</h3>
            <img className="image-work" src={cssgrid} alt="habit-tracker" />
            <div>
              <p>As a group project we decided to build a habit tracker
              for children who require a more structured everyday life.
              We have facilited the view and user interaction with designated
              color for each weekday.
              </p>
              <p className="italic">Language used: React, JavaScript, HTML5, CSS</p>
            </div>
          </div>
          <div className="container-work">
            <h3>Sveriges radio</h3>
            <img className="image-work" src={cssgrid} alt="bild" />
            <div>
              <p>Using Sverige&apos;s radio&apos;s API to create a page where you can
              listen to the radio station provided by Sweden&apos;s public service.
              </p>
              <p className="italic">Language used: React, JavaScript, HTML5, CSS</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
