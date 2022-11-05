import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

var slugify = require("slugify")

const SingleProjectComponent = ({
  title,
  image,
  index,
  description,
  stack,
  demo,
  github,
  type,
}) => {
  const img = getImage(image.gatsbyImageData)

  const slug = slugify(title).toLowerCase()

  return (
    <li className="single-project-wrapper">
      <div className="single-project-img-wrapper">
        <div className="single-project-img-background"></div>
        <GatsbyImage objectFit="contain" image={img} alt={title} />
      </div>
      <div className="single-project-content-wrapper">
        <p className="project-number">0{index + 1}.</p>

        <Link
          to={`${type === "homePage" ? `projects/${slug}` : `${slug}`}`}
          className="project-title"
        >
          {title}
        </Link>
        <p className="project-description">
          {description.description.slice(0, 180)}...
        </p>
        <ul className="project-stock-wrapper">
          {stack.map((item, index) => {
            return (
              <li key={index} className="project-stock-item">
                {item.toUpperCase()}
              </li>
            )
          })}
        </ul>
        <div className="links-wrapper">
          <a href={demo} target="_blank" className="link-item">
            <FaExternalLinkAlt />
          </a>
          <a href={github} target="_blank" className="link-item">
            <FaGithub />
          </a>
        </div>
      </div>
    </li>
  )
}

export default SingleProjectComponent
