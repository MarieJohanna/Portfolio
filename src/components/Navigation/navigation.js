import React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav className="navigation">
          <ul id="sub-nav-1">
            <li><Link to="/" style={{ textDecoration: "none" }}>&lt;Home&gt;</Link></li>
            <li><Link to="/about" style={{ textDecoration: "none" }}>&lt;About&gt;</Link></li>
            <li><Link to="/work" style={{ textDecoration: "none" }}>&lt;Work&gt;</Link></li>
            <li><Link to="/contact" style={{ textDecoration: "none" }}>&lt;Contact me&gt;</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation
