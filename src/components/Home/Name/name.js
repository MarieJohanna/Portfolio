import React from "react"
import { Link } from "react-router-dom"
// import Grid from "./Grid/grid"
// import Form from "../Form/form"
import "./name.css"

class Name extends React.Component {

  render() {
    return (
      <div className="top-of-page-name">
        <div className="name-box typewriter">
          <h1 className="typewriter"><Link to="/about" style={{ textDecoration: "none" }}>Marie Nilsson</Link></h1>
        </div>
      </div>
    )
  }

}

export default Name
