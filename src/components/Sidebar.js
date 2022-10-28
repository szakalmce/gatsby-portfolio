import { Link } from "gatsby"
import React from "react"

import { IoClose } from "react-icons/io5"
import { NavLinks } from "../data/data"

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <aside className={`sidebar-wrapper ${showSidebar ? "sidebar-show" : null}`}>
      <div className="sidebar-close-wrapper">
        <IoClose onClick={() => setShowSidebar(false)} />
      </div>
      <ul className="sidebar-navigation-wrapper">
        {NavLinks.map(item => {
          const { link, id, name } = item
          return (
            <Link onClick={() => setShowSidebar(false)} key={id} to={link}>
              {name}
            </Link>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
