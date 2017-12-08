import React from "react"
import "./projectdetails.css"

class ProjectDetails extends React.Component {

  render() {
    return (
      <div className="project-container">
        <div className="project">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.keywords}</p>
        </div>
      </div>
    )
  }
}

export default ProjectDetails
