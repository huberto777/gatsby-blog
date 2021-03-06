import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Title from "../components/Title"
import Blog from "../components/Blog"
import PropTypes from "prop-types"

const BlogPage = ({ data }) => {
  const { nodes } = data.allMdx
  // console.log(nodes)
  return (
    <>
      <SEO title="Blog" />
      <Title title="articles" />
      <section className="blog-page">
        {nodes.map(
          ({ excerpt, frontmatter: { title, slug, featuredImage } }) => (
            <Blog
              key={slug}
              title={title}
              slug={slug}
              image={featuredImage.childImageSharp.fluid}
              excerpt={excerpt}
            />
          )
        )}
      </section>
    </>
  )
}

export const query = graphql`
  {
    allMdx(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
      nodes {
        frontmatter {
          title
          slug
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 10)
      }
    }
  }
`

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage
