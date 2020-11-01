import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "../components/Image"
import SEO from "../components/seo"
import Title from "../components/Title"

const IndexPage = ({ data }) => {
  const [value, setValue] = useState(0)
  const {
    allFile: { nodes },
  } = data

  useEffect(() => {
    let intID = setInterval(
      () => setValue(value === nodes.length - 1 ? 0 : value + 1),
      10000
    )
    return () => {
      clearInterval(intID)
    }
  }, [value])

  return (
    <>
      <SEO title="Home" />
      <Title title="French bulldog" />
      <section className="main-page">
        <div className="section-center main-center">
          <article className="main-info">
            <div>
              <Image fluid={nodes[value].childImageSharp.fluid} />
              {nodes.map((node, index) => (
                <button
                  key={node.id}
                  onClick={() => setValue(index)}
                  className={`slider-btn ${index === value && "active-btn"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <p>
              The French Bulldog resembles a Bulldog in miniature, except for
              the large, erect “bat ears” that are the breed’s trademark
              feature. The head is large and square, with heavy wrinkles rolled
              above the extremely short nose. The body beneath the smooth,
              brilliant coat is compact and muscular. The bright, affectionate
              Frenchie is a charmer. Dogs of few words, Frenchies don’t bark
              much—but their alertness makes them excellent watchdogs. They
              happily adapt to life with singles, couples, or families, and do
              not require a lot of outdoor exercise. They get on well with other
              animals and enjoy making new friends of the human variety. It is
              no wonder that city folk from Paris to Peoria swear by this vastly
              amusing and companionable breed.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/slider/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
        id
      }
    }
  }
`

export default IndexPage
