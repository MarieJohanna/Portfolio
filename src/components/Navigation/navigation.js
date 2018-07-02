import React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav className="navigation">
          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
          <label className="hamburger" htmlFor="hamburger">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </label>
          <div className="menu-container">
            <div className="navigation-menu">
              <ul id="sub-nav-1">
                <li><h5><Link to="/" style={{ textDecoration: "none" }}>Home</Link></h5></li>
                <li><h5><Link to="/work" style={{ textDecoration: "none" }}>Projects</Link></h5></li>
                <li><h5><Link to="/projects" style={{ textDecoration: "none" }}>Projects2</Link></h5></li>
                <li><h5><Link to="/about" style={{ textDecoration: "none" }}>About</Link></h5></li>
                <li><h5><Link to="/contact" style={{ textDecoration: "none" }}>Get in touch</Link></h5></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation
