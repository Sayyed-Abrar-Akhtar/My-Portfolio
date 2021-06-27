import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        keywords
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const Seo = ({ title, description, detail }) => {
  const { site } = useStaticQuery(query)
  const {
    author,
    siteDesc,
    image,
    keywords,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title == "Home" ? siteTitle | detail : title | detail}`}
    >
      <meta name="description" content={description || siteDesc} />
      <meta name="author" content={author} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={siteDesc} />
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title " content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <link rel="canonical" href="https://www.sayyedabrarakhtar.com.np" />
    </Helmet>
  )
}

export default Seo
