import React from "react"
import "./home.css"

class Home extends React.Component {

  render() {
    return (
      <div className="home-start">
        <div className="top-of-page">
          <div className="image-box" />
          <div className="triangles">
            <div className="triangle-1" />
            <div className="triangle-2" />
          </div>
        </div>
        <div className="content">
          <div className="short-information">
            <div className="short-about">
              <h3>About Marie</h3>
              <p>I am an outgoing and optimistic person who loves meeting new
                people and to encounter new cultures. I have since an early
                age travelled a lot which has inspired me to later in life
                live in other countries. Until now I have lived in France,
                Colombia and Argentina and I currently live in Stockholm where
                I grew up as well.
              </p>
              <p>I have a business degree and have been working with Treasury
                and Finance for 5 years on the corporate side before I started
                as a business consultant for an IT-consultancy firm about a
                year ago. In my roles I have worked in a lot of different
                systems and platforms which is part of the inspiration for
                wanting to learn to code and what brought me to this course.
              </p>
            </div>
          </div>
          <div className="project">
            <h3>Project 1</h3>
          </div>
          <div className="personal-highlight">
            <div className="hobbies-text-box">
              <h3>Hobbies</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Totam in perspiciatis rerum, tenetur vitae animi eum non
               aliquam cupiditate ea. Alias, repudiandae, quo eveniet
               officiis voluptatem similique dolore consequatur quod?
              </p>
            </div>
            <div className="hobbies-box">
              Bild
            </div>
          </div>
        </div>

        <footer>
          <h3>Here goes contact information etc</h3>
        </footer>
      </div>
    )
  }

}

export default Home
