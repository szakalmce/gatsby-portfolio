import React from "react"
import { graphql } from "gatsby"

const projectTemplate = ({ data }) => {
  const { title, description } = data.allContentfulPortfolioProjects.nodes[0]

  return (
    <article className="single-project-page-wrapper bg-gray">
      <div className="container">
        <div className="single-project-inner">
          <h2 className="single-project-title">{title}</h2>
          <p className="single-project-description">
            {description.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export const query = graphql`
  query ($title: String) {
    allContentfulPortfolioProjects(filter: { title: { eq: $title } }) {
      nodes {
        title
        description {
          description
        }
        featured
        github
        image {
          gatsbyImageData
        }
        demo
      }
    }
  }
`

export default projectTemplate
