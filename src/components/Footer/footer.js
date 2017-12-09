import React from "react"
import "./footer.css"

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="email-form" id="form" />
        <div className="contact-information">
          <h3>Marie Nilsson</h3>
          <p>Email</p>
          <p>Phone</p>
        </div>

      </footer>
    )
  }
}

export default Footer
