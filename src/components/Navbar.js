import { Link } from "gatsby"
import React from "react"
import { NavLinks } from "../data/data"

import { FaBars } from "react-icons/fa"

const Navbar = ({ setShowSidebar, showSidebar }) => {
  return (
    <nav className="navbar-wrapper">
      <div className="container navbar-inner">
        <div className="navbar-logo-wrapper">
          <h1 className="navbar-logo">
            Web<span>Dev</span>
          </h1>
        </div>
        <ul className="navbar-nav-wrapper">
          {NavLinks.map(item => (
            <Link
              activeClassName="navbar-link-active"
              className="navbar-link"
              to={item.link}
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="navbar-bar">
          <FaBars
            onClick={() => {
              setShowSidebar(true)
            }}
            className="navbar-bar-icon"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
