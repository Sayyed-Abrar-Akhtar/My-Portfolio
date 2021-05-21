import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { RiMailSendFill } from "react-icons/ri"
import { FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import Title from "../components/Title"

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-info">
          <Title title="contact details" />
          <div className="contact-details">
            <p className="contact-heading">
              <RiMailSendFill />
              Email
            </p>
            <div className="contact-value">
              <p className="contact-value--text">
                <a href="mailto:akhtars10@uni.coventry.ac.uk">
                  akhtars10@uni.coventry.ac.uk
                </a>
              </p>
            </div>
            <p className="contact-heading">
              <FaPhoneAlt />
              Phone
            </p>
            <div className="contact-value">
              <p className="contact-value--text">
                <a href="tel:+9779862405047">+9779862405047</a>
              </p>
            </div>
            <p className="contact-heading">
              <FaLinkedin />
              Linkedin
            </p>
            <div className="contact-value">
              <p className="contact-value--text">
                <a href="https://www.linkedin.com/in/sayyed-abrar-akhtar-995585201/">
                  linkedin/sayyed-abrar
                </a>
              </p>
            </div>
            <p className="contact-heading">
              <FaFacebookSquare />
              Facebook
            </p>
            <div className="contact-value">
              <p className="contact-value--text">
                <a href="https://www.facebook.com/mohammad.amiralmomenin.7/">
                  facebook/sayyed-abrar
                </a>
              </p>
            </div>
          </div>
        </article>
        <article className="contact-form">
          <h3>Leave me a message</h3>
          <form action="https://formspree.io/f/xknkjkzy" method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="email"
                required
              />
              <textarea
                className="form-control"
                placeholder="message"
                name="message"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="submit-btn btn">
                submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
