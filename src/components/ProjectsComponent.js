import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import SingleProjectComponent from "./SingleProjectComponent"

const ProjectsComponent = ({ type }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioProjects {
        nodes {
          title
          github
          stack
          description {
            description
          }
          featured
          github
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
          demo
        }
      }
    }
  `)

  const projects = data.allContentfulPortfolioProjects.nodes

  const feturedProjects = data.allContentfulPortfolioProjects.nodes.filter(
    item => item.featured
  )

  return (
    <section className="section-wrapper bg-gray">
      <div className="container">
        {/* PROJECTS */}

        <ul className="projects-wrapper">
          <>
            {type === "homePage" ? (
              <>
                <div className="title-wrapper">
                  <h2 className="section-title">Projects</h2>
                  <div className="title-underline"></div>
                </div>
                {feturedProjects.map((item, index) => (
                  <SingleProjectComponent
                    type={type}
                    key={item.title}
                    {...item}
                    index={index}
                  />
                ))}
              </>
            ) : (
              <>
                {projects.map((item, index) => (
                  <SingleProjectComponent
                    key={item.title}
                    {...item}
                    index={index}
                  />
                ))}
              </>
            )}
          </>
        </ul>
        {type === "homePage" ? (
          <div className="button-project-wrapper">
            <Link to="/projects" as="button" className="btn btn-projects">
              Show more
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ProjectsComponent
