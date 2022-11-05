import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

const Experience = () => {
  const [portfolioItem, setPortfolioItem] = useState(0)

  console.log(portfolioItem)

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioExperience {
        nodes {
          title
          test {
            test
          }
          companyName
          id
        }
      }
    }
  `)

  const {
    allContentfulPortfolioExperience: { nodes: node },
  } = data

  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-wrapper">
          <div className="experience-list-wrapper">
            {node.map((item, index) => (
              <button
                key={index}
                className={`btn experience-button ${
                  portfolioItem === index ? "experience-button-active" : ""
                }`}
                onClick={() => setPortfolioItem(index)}
              >
                {item.companyName}
              </button>
            ))}
          </div>

          <div className="experience-content-wrapper">
            {node.map((item, index) => {
              const { title, companyName, test } = item

              const tests = test.test.split("- ").slice(1)

              return (
                <div
                  key={index}
                  className={`experience-content-wrapper-inner  ${
                    portfolioItem === index ? "" : "hidden"
                  }`}
                >
                  <p className="experience-title">{title}</p>
                  <p className="experience-company">
                    {companyName.toUpperCase()}
                  </p>
                  <ul className="experience-company-list">
                    {tests.map((item, index) => (
                      <li className="experience-company-list-item" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
