import React from "react"
import { socialLinks } from "../data/data"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-bg-wrapper"></div>
      <div className="container hero-inner">
        <div className="hero-content-wrapper">
          <div className="hero-line"></div>
          <h1 className="title">I'm Tomek</h1>
          <p className="sub-title">Freelance Web And Mobile UI/UX Designer</p>
          <button className="btn hero-btn">Contact me</button>
          <ul className="hero-social">
            {socialLinks.map(item => {
              const { id, name, icon, link } = item
              return (
                <Link className="hero-social-link" key={id} to={link}>
                  {icon}
                </Link>
              )
            })}
          </ul>
        </div>
        <div className="hero-img-wrapper">
          <div className="hero-img-inner">
            {/* <StaticImage
              imgClassName="hero-img"
              src="../images/hero.webp"
              alt="img"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
