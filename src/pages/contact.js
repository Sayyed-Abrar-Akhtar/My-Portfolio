import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Let's connect</h3>
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
