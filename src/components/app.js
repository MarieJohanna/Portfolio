// Build this site to be my "Home" page on my site.//
// HTML code and then change Components as I build more places.//
import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home/home"
import About from "./About/about"
import Contact from "./Contact/contact"
import Work from "./Work/work"
// import ProjectsOverview from "./ProjectsOverview/projectsOverview"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/work" component={Work} />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }

}

export default App
