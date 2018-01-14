import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="contact-information" id="contact">
          <h3><Link to="/contact" style={{ textDecoration: "none" }}>Get in Touch</Link></h3>
          <p>mariejohannanilsson@gmail.com</p>
          <p>+46 70 626 3070</p>
        </div>

      </footer>
    )
  }
}

export default Footer
