import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`

const PostLayout = ({ data }) => {
  // console.log(data)
  const { mdx } = data
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <section className="blog-template">
        <Image fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </section>
    </>
  )
}

export default PostLayout
