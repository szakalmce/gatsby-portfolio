import React from "react"
import Layout from "gatsby-plugin-image"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// const React = require("react")
// const Layout = require("./src/components/layout")

// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }
