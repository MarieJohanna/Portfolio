import React from "react"
// import ProjectsOverview from "../ProjectsOverview/projectsOverview"
import Name from "../Home/Name/name"
import Navigation from "../Navigation/navigation"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div>
        <Name />
        <Navigation />
        {/* <ProjectsOverview /> */}
      </div>
    )
  }
}

export default About
