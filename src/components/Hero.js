import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>i'm sayyed</h1>
          <h4 className="hero-text">freelance web and android developer</h4>
          <Link to="/contact" className="btn">
            let's connect <span className="hero-icon--gt">&#8811;</span>
          </Link>
          <SocialLinks />
        </article>
        <StaticImage
          src="../assets/hero-img.png"
          alt="flowers and egg"
          className="hero-img"
          layout="constrained"
          placeholder="tracedSVG"
        />
      </div>
    </header>
  )
}

export default Hero
