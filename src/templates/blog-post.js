import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
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
  return (
    <>
      <section className="blog-template">
        <Image
          fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </section>
    </>
  )
}

export default PostLayout
