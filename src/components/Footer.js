import { Link } from "gatsby"
import React from "react"
import { socialLinks } from "../data/data"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-inner">
          <ul className="footer-social-wrapper">
            {socialLinks.map(item => (
              <li key={item.id} className="social-item">
                <Link to={item.link}>{item.icon}</Link>
              </li>
            ))}
          </ul>
          <p className="footer-copy">
            copyright@2022 <span>TomekGarbarz</span> all rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
