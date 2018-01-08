// Build this site to be my "Home" page on my site.//
// HTML code and then change Components as I build more places.//
import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home/home"
import About from "./About/about"
import Form from "./Form/form"
import Footer from "./Footer/footer"
// import ProjectsOverview from "./ProjectsOverview/projectsOverview"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Form} />
          {/* <Route exact path="/projects" component={ProjectsOverview} /> */}
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
