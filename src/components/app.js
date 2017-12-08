// Build this site to be my "Home" page on my site.//
// HTML code and then change Components as I build more places.//
import React from "react"
import Home from "./Home/home"
import Navigation from "./Navigation/navigation"
import ProjectsOverview from "./ProjectsOverview/projectsOverview"

class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <ProjectsOverview />
      </div>
    )
  }

}

export default App
