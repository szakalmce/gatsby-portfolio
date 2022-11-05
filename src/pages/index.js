import React from "react"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import ProjectsComponent from "../components/ProjectsComponent"
import Services from "../components/Services"
import "../styles/styles.css"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Experience />
      <ProjectsComponent type="homePage" />
    </div>
  )
}

export default Home
