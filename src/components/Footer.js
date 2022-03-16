import React from "react"
import logo from "../assets/images/logo.svg"

const Footer = () => {
  return (
    <footer className="page-footer">
      <img src={logo} alt="logo" />
      <div>
        <a href="https://indychrista.com" className="btn footer-btn">
          Go to indychrista.com
        </a>
      </div>
      <div className="footer-social-bar">
        <a href="https://facebook.com/christa/indychrista">
          <span className="icon" aria-label="Facebook link">
            F
          </span>
        </a>
        <a href="https://instagram.com/indychrista">
          <span className="icon" aria-label="Instagram link">
            I
          </span>
        </a>
        <a href="https://twitter.com/indychrista">
          <span className="icon" aria-label="Twitter link">
            T
          </span>
        </a>
      </div>
      <div>
        <p>
          &copy;{new Date().getFullYear()}{" "}
          <span>Christa DeJesus Design & Development</span>.
        </p>
        <p>
          (This website is for demonstration only and does not represent an
          actual automotive company.)
        </p>
      </div>
    </footer>
  )
}

export default Footer
