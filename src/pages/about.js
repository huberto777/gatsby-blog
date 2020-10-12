import React, { useState } from "react"
import SEO from "../components/SEO"
import Title from "../components/Title"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const AboutPage = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const [value, setValue] = useState(0)
  const { body } = nodes[value]
  return (
    <>
      <SEO title="About" description="about webdev" />
      <Title title="french bulldog" />
      <section className="about-page">
        <div className="section-center">
          <article className="about-text">
            <div className="btn-container">
              {nodes.map(({ frontmatter }, index) => (
                <button
                  key={frontmatter.slug}
                  onClick={() => setValue(index)}
                  className={`about-btn ${index === value && "active-btn"}`}
                >
                  {frontmatter.title}
                </button>
              ))}
            </div>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        frontmatter {
          author
          slug
          title
        }
        body
      }
    }
  }
`

export default AboutPage
