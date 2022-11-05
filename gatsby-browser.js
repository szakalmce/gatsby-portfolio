import React from "react"
import Layout from "./src/components/Layout"
import { GlobalStyles } from "./src/styles/globalStyles"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      <GlobalStyles />
      {element}
    </Layout>
  )
}

// const React = require("react")
// const Layout = require("./src/components/Layout").default
