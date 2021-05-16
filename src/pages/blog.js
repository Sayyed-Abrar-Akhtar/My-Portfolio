import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return (
    <Layout>
      <section className="section">
        <Blogs />
      </section>
    </Layout>
  )
}

export default Blog
