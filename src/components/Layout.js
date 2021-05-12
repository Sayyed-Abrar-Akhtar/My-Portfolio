import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <h2>layout component</h2>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
