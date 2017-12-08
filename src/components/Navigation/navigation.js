import React from "react"
import "./navigation.css"

class Navigation extends React.Component {

  render() {
    return (
      <header>
        <nav className="navigation">
          <ul id="sub-nav-1">
            <li>About</li>
            <li>Projects</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation
