import React from "react"
import Name from "./Name/name"
import Navigation from "../Navigation/navigation"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-start">
        <Navigation />
        <Name />
      </div>
    )
  }

}

export default Home
