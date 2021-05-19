import React from "react"
import { FaSadTear } from "react-icons/fa"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <FaSadTear className="error-icon--sad" />
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link to="/" className="btn center-btn">
            Back to home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
