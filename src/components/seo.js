import React from "react"
import { Helmet } from "react-helmet"

function SEO({ title }) {
  return <Helmet htmlAttributes={{ lang: "en" }} title={title} />
}

export default SEO
