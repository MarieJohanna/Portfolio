import React from "react"
import { Link } from "react-router-dom"
import "./grid.css"

class Grid extends React.Component {

  render() {
    return (
      <div className="Grid">
        <div className="grid-container">
          <div className="tall wide">
            <div className="about-who">
              <h3><Link to="/about" style={{ textDecoration: "none" }}>&lt;Who&gt;</Link></h3>
              <p>I am an outgoing and optimistic person who loves meeting new
            people and to encounter new cultures. I have since an early
            age travelled a lot which has inspired me to later in life
            live in other countries. Until now I have lived in France,
            Colombia and Argentina and I currently live in Stockholm where
            I grew up as well.
              </p>
              <p>I have a business degree and have been working with Treasury
            and Finance for 5 years on the corporate side before I started
            as a business consultant for an IT-consultancy firm about a
            year ago. In my roles I have worked in a lot of different
            systems and platforms which is part of the inspiration for
            wanting to learn to code and what brought me to this course.
              </p>
            </div>
          </div>
          <div className="tall wide">
            <div className="about-projects">
              <h3><Link to="/projects" style={{ textDecoration: "none" }}>&lt;Projects&gt;</Link></h3>
              <p>Short intro of my web development projects</p>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Grid
