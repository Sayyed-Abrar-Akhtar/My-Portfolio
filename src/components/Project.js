import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaLink } from "react-icons/fa"
const Project = ({
  id,
  title,
  description,
  github,
  url,
  stack,
  image,
  index,
}) => {
  const pathToImage = getImage(image)
  return (
    <article className="project">
      <GatsbyImage image={pathToImage} className="project-img" alt={title} />
      <div className="project-info">
        <span className="project-number" key={id}>
          {index < 10 ? `0${index + 1}` : `${index + 1}`}
        </span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((stack, index) => {
            return <span key={index}>{stack.stack_title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithub className="project-icon" />
          </a>
          {url && (
            <a href={url}>
              <FaLink className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.object.isRequired,
}

export default Project
