import React from "react"
import "./contact.css"
import Navigation from "../Navigation/navigation"

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className="contact-information" id="contact">
          <h3>Get in Touch</h3>
          <p>mariejohannanilsson@gmail.com</p>
          <p>+46 70 626 3070</p>
        </div>
      </div>
    )
  }
}

export default Contact
