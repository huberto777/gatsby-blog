import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Title from "../components/Title"
import Blog from "../components/Blog"

const BlogPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  // console.log(nodes)
  return (
    <>
      <SEO title="Blog" description="" />
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
    allMdx {
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

export default BlogPage
