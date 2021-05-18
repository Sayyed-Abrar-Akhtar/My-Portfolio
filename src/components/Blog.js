import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const Blog = ({ id, title, desc, image, date, category, slug }) => {
  const pathToImage = getImage(image)
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        <GatsbyImage image={pathToImage} alt={title} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog
