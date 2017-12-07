import React from "react"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-start">
        <header>
          <nav className="navigation">
            <ul id="sub-nav-1">
              <li>About</li>
              <li>Projects</li>
              <li>Work</li>
            </ul>
            <ul id="sub-nav-2">
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }

}

export default Home
