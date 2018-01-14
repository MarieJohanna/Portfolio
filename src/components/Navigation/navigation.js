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
                <li><Link to="/" style={{ textDecoration: "none" }}>&lt;Home&gt;</Link></li>
                <li><Link to="/about" style={{ textDecoration: "none" }}>&lt;About&gt;</Link></li>
                <li><Link to="/work" style={{ textDecoration: "none" }}>&lt;Work&gt;</Link></li>
                <li><Link to="/contact" style={{ textDecoration: "none" }}>&lt;Contact me&gt;</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navigation
