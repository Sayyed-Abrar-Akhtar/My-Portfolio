import React from "react"
import { graphql } from "gatsby"

import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Seo from "../components/SEO"
import Awards from "../components/Awards"
import Title from "../components/Title"

const Index = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
    allStrapiAwards: { nodes: awards },
  } = data
  return (
    <Layout>
      <Seo detail="Portfolio Website" />
      <Hero />
      <section className="homepage_award">
        <Title title="Awards and Certifications" />
        <section className="awards-container">
          {awards.map((i, idx) => (
            <Awards key={idx} title={i.title} imageUrl={getImage(i.image)} />
          ))}
        </section>
      </section>
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="Latest blog" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        github
        url
        stack {
          stack_title
          id
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        title
        desc
        category
        slug
        date(formatString: "MMM Do, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
    allStrapiAwards {
      nodes {
        title
        description
        from
        to
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`

export default Index
