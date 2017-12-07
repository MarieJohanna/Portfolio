import React from "react"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-start">
        <div className="top-of-page">
          <div className="image-box">
            <img src="" alt=""/>
          </div>
        </div>
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
