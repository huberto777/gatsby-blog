import React, { useState } from "react"
import Title from "../components/Title"
import { graphql } from "gatsby"
import Image from "../components/Image"
import SEO from "../components/SEO"
import Pager from "../components/Pager"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const ImagesPage = ({ data, pageContext }) => {
  const { nodes } = data.allFile
  // console.log(pageContext)
  // console.log(nodes)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  // console.log(photoIndex, isOpen)
  return (
    <>
      <SEO title="Images" />
      <Title title="images" />
      <p className="image-info">total count: {pageContext.totalCount}</p>
      <section className="image-page">
        {nodes.map(({ childImageSharp }, index) => (
          <button
            onClick={() => setIsOpen(true)}
            onBlur={() => setPhotoIndex(index)}
            key={childImageSharp.id}
            className="image-img"
          >
            <Image fluid={childImageSharp.fluid} />
          </button>
        ))}
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={nodes[photoIndex].childImageSharp.fluid.src}
          nextSrc={
            nodes[(photoIndex + 1) % nodes.length].childImageSharp.fluid.src
          }
          prevSrc={
            nodes[(photoIndex + nodes.length - 1) % nodes.length]
              .childImageSharp.fluid.src
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + nodes.length - 1) % nodes.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % nodes.length)
          }
        />
      )}
      <Pager {...pageContext} />
    </>
  )
}

export const query = graphql`
  query($limit: Int, $skip: Int) {
    allFile(
      filter: { absolutePath: { regex: "/gallery/" } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          id
        }
      }
    }
  }
`

export default ImagesPage
