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
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <div className="top-of-page">
          <div className="image-box">
            <img src="" alt="" />
          </div>
        </div>
        <div className="short-information">
          <div className="short-about">
            <div className="text-box">
              Project 1 - text
            </div>
          </div>
          <div className="project">
            Project 2
          </div>
        </div>
        <div className="personal-highlight">
          <div className="hobbies-text-box">
            <h3>Hobbies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Totam in perspiciatis rerum, tenetur vitae animi eum non
               aliquam cupiditate ea. Alias, repudiandae, quo eveniet
               officiis voluptatem similique dolore consequatur quod?
            </p>
          </div>
          <div className="hobbies-box">
            <h3>Hobbies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Totam in perspiciatis rerum, tenetur vitae animi eum non
               aliquam cupiditate ea. Alias, repudiandae, quo eveniet
               officiis voluptatem similique dolore consequatur quod?
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default Home
