import React from "react"
import Name from "../Home/Name/name"
import Navigation from "../Navigation/navigation"
import "./work.css"
import cssgrid from "./../../images/cssgrid1.png"

export default class Work extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Name />

        <div className="collection-work">
          <div className="container-work">
            <h3>CSS-Grid</h3>
            <img className="image-work" src={cssgrid} alt="bild" />
            <div>
              <p>Using CSS-grid to create to create the structure of
              boxes and then style each box with its different
              features such as images, different font size and structure.
              </p>
              <p>Language used: React, HTML5, CSS</p>
            </div>
          </div>
          <div className="container-work">
            <h3>{this.props.name}</h3>
            <div style={{ backgroundImage: `url(${this.props.image})` }} />
            <p>{this.props.description}</p>
            <p>{this.props.keywords}</p>
          </div>
          <div className="container-work">
            <h3>{this.props.name}</h3>
            <div style={{ backgroundImage: `url(${this.props.image})` }} />
            <p>{this.props.description}</p>
            <p>{this.props.keywords}</p>
          </div>
        </div>
      </div>
    )
  }
}
