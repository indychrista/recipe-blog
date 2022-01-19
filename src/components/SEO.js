import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../static/favicon.ico"

const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        description
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ language: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

export default SEO
