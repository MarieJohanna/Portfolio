import React from "react"
// import { Link } from "react-router-dom"
import "./projectsOverview.css"
import ProjectDetails from "./ProjectDetails/projectdetails"
import projects from "./../../data/projects"

class ProjectsOverview extends React.Component {

  render() {
    return (
      <div className="collection-projects">
        {projects.map((item) => {
          return <ProjectDetails
            key={item.id}
            name={item.name}
            description={item.description}
            keywords={item.keywords} />
        })}
      </div>
    )
  }
}

export default ProjectsOverview
