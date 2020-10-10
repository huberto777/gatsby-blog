import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ title, image, slug }) => {
  return (
    <Link className="blog" to={`/blog/${slug}`} key={slug}>
      <Image fluid={image} className="blog-img" />
      <div className="blog-card">
        <h4>{title}</h4>
      </div>
    </Link>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
}

export default Blog
