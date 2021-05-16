import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title="Blog" />
      <Blog />
    </section>
  )
}
export default Blogs
