import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-social-bar">
        <span className="icon">F</span>
        <span className="icon">I</span>
        <span className="icon">P</span>
      </div>
      <div>
        <p>
          &copy;{new Date().getFullYear()}{" "}
          <span>Christa DeJesus Design & Development</span>.
        </p>
      </div>
    </footer>
  )
}

export default Footer
