import React from "react"
import "./footer.css"

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="contact-information">
          <h3>Marie Nilsson</h3>
          <p>Email</p>
          <p>Phone</p>
        </div>
        <div className="email-form">
          Formulär
        </div>
      </footer>
    )
  }
}

export default Footer
