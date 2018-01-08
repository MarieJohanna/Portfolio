import React from "react"
// import Grid from "./Grid/grid"
import Name from "./Name/name"
import Navigation from "../Navigation/navigation"
// import Form from "../Form/form"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-start">
        <Name />
        <Navigation />
        {/* <Form /> */}
        {/* <div className="top-of-page">
          <div className="image-box" />
          <div className="triangles">
            <div className="triangle-1" />
            <div className="triangle-2" />
          </div>
        <div className="content">
          <div className="short-information">
            <div className="short-about">
              <div className="short-about-text">
                <h3>About Marie</h3>
                <p>This is me...</p>
              </div>
            </div>
            <div className="project">
              <div className="project-1">
                <h3>Project 1</h3>
              </div>
              <div className="project-2">
                <h3>Project 2</h3>
              </div>
            </div>
          </div>
          <div className="personal-highlight">
            <div className="hobbies-text-box">
              <h3>Ice Cream</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Totam in perspiciatis rerum, tenetur vitae animi eum non
               aliquam cupiditate ea. Alias, repudiandae, quo eveniet
               officiis voluptatem similique dolore consequatur quod?
              </p>
            </div>
            <div className="hobbies-box">
              <h3>Bild</h3>
            </div>
          </div>
        </div> */}
      </div>
    )
  }

}

export default Home
