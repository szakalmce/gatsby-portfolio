import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const about = ({ data }) => {
  const { nodes } = data.allContentfulPortfolioProjects

  let newArr = []
  const stack = nodes.map(item =>
    item.stack.map(item =>
      newArr.push({
        stack: item,
        id: Math.random(),
      })
    )
  )

  return (
    <div className="page-wrapper bg-gray">
      <div className="container">
        <div className="about-inner">
          <div className="about-img-wrapper">
            <StaticImage
              layout="fullWidth"
              imgClassName="about-img"
              src="../images/hero.webp"
              alt="img"
            />
          </div>
          <div className="about-content">
            <div className="title-wrapper title-wrapper-left">
              <h2 className="section-title">About</h2>
              <div className="title-underline title-underline-left"></div>
            </div>
            <p className="about-text">
              Salvia tousled chambray, shoreditch retro cliche dreamcatcher
              coloring book roof party keffiyeh small batch pork belly actually
              mlkshk shaman. Stumptown typewriter you probably haven't heard of
              them pork belly dreamcatcher umami woke, chambray snackwave craft
              beer. You probably haven't heard of them slow-carb trust fund
              thundercats bespoke live-edge forage echo park artisan coloring
              book. Semiotics af tumblr, health goth viral iPhone cold-pressed
              ugh kogi fanny pack. Photo booth 3 wolf moon narwhal, marfa
              lumbersexual taiyaki biodiesel cloud bread slow-carb enamel pin
              stumptown taxidermy food truck 8-bit mustache. Pickled next level
              vaporware, brooklyn af sriracha hoodie try-hard flannel slow-carb
              raw denim.
            </p>
            <ul className="about-stack-list">
              {newArr.map(item => (
                <li key={item.id}>{item.stack}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulPortfolioProjects {
      totalCount
      nodes {
        stack
      }
    }
  }
`

export default about
