import React from "react"
import "./projectsOverview.css"
import Project from "../Project/project"

class ProjectsOverview extends React.Component {

  render() {
    return (
      <div className="collection-projects">
        <Project
          title="Yearbook"
          description="Created a yearbook with my course mates"
          keywords="HTML5, CSS" />
        <Project
          title="Yearbook"
          description="Created a yearbook with my course mates"
          keywords="HTML5, CSS" />
        <Project
          title="Yearbook"
          description="Created a yearbook with my course mates"
          keywords="HTML5, CSS" />
        <Project
          title="Yearbook"
          description="Created a yearbook with my course mates"
          keywords="HTML5, CSS" />
      </div>
    )
  }
}

export default ProjectsOverview
