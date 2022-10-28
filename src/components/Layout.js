import React, { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {children}
      <Footer />
    </div>
  )
}

export default Layout
