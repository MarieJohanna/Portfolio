import React from "react"
import Grid from "./Grid/grid"
import Name from "./Name/name"
import Navigation from "../Navigation/navigation"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-start">
        <Navigation />
        <Name />
        <Grid />
      </div>
    )
  }

}

export default Home
