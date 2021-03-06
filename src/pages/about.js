import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import Awards from "../components/Awards"

const About = ({ data: { allStrapiAbout, allStrapiAwards } }) => {
  const { title, heading, info, stack, image } = allStrapiAbout.nodes[0]

  const pathToImage = getImage(image)
  return (
    <Layout>
      <Seo title="About" />
      <section className="about-page">
        <Title title="Awards and Certifications" />
        <section className="awards-container">
          {allStrapiAwards.nodes.map((i, idx) => (
            <Awards key={idx} title={i.title} imageUrl={getImage(i.image)} />
          ))}
        </section>
        <div className="section-center about-center">
          <GatsbyImage
            image={pathToImage}
            alt="Sayyed Abrar Akhtar"
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            <h4>{heading}</h4>

            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}> {item.stack_title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        heading
        info
        stack {
          id
          stack_title
        }
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

export default About
