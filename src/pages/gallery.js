import React from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import Image from "../components/Image"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const GalleryPage = ({ data }) => {
  const {
    allFile: { nodes, totalCount },
  } = data
  return (
    <>
      <SEO title="Gallery" />
      <Title title="gallery" />
      <p className="image-info">total count: {totalCount} </p>
      <section className="image-page">
        {nodes.map(({ id, childImageSharp: { fluid } }) => (
          <Image key={id} fluid={fluid} />
        ))}
      </section>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
        id
      }
      totalCount
    }
  }
`

export default GalleryPage
