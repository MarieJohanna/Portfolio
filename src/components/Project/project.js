import React from "react"
import "./project.css"

class Project extends React.Component {

  render() {
    return (
      <div className="project-container">
        <div className="project">
          <img src={this.props.image} alt="" />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>{this.props.keywords}</p>
        </div>
      </div>
    )
  }
}

export default Project
