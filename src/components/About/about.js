import React from "react"
// import ProjectsOverview from "../ProjectsOverview/projectsOverview"
import Grid from "../Home/Grid/grid"
import Name from "../Home/Name/name"
import Navigation from "../Navigation/navigation"
import "./about.css"

class About extends React.Component {

  render() {
    return (
      <div>
        <Name />
        <Navigation />
        <Grid />
        {/* <ProjectsOverview /> */}
      </div>
    )
  }
}

export default About
