import React from "react"
// import { Link } from "react-router-dom"
import "./projectsOverview.css"
import ProjectDetails from "./ProjectDetails/projectdetails"
import projectsApi from "./../../data/projects"
import Navigation from "../Navigation/navigation"

class ProjectsOverview extends React.Component {

  render() {
    const projectList = projectsApi.getAll()
    return (
      <div>
        <Navigation />
        <div className="collection-projects">
          {projectList.map((item) => {
            return <ProjectDetails
              key={item.id}
              name={item.name}
              image={item.image}
              link={item.link}
              description={item.description}
              keywords={item.keywords} />
          })}
        </div>
      </div>
    )
  }
}

export default ProjectsOverview
