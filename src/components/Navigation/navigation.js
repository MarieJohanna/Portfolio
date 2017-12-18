import React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav className="navigation">
          <ul id="sub-nav-1">
            <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/about" style={{ textDecoration: "none" }}>About</Link></li>
            <li><Link to="/projects" style={{ textDecoration: "none" }}>Projects</Link></li>
            <li><a href="#contact" style={{ textDecoration: "none" }}>Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation
