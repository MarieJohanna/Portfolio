// import React from "react"
// import "./project.css"
// import projects from "../../../data/projects"
//
// class Project extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       project: {}
//     }
//   }
//
//   componentDidMount() {
//     const project = projects.find(p => (p.id === this.props.match.params.id))
//
//     this.setProject(project)
//   }
//
//   setProject = (project) => {
//     this.setState({
//       project
//     })
//   }
//
//   render() {
//     return (
//       <div className="project-container">
//         <div className="project">
//           <h3>{this.state.project.name}</h3>
//           <p>{this.state.project.description}</p>
//           <p>{this.state.project.keywords}</p>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Project
