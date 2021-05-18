import React from "react"
import { FaHeart } from "react-icons/fa"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="social-link--container">
          <SocialLinks styleClass="footer-links" />
        </div>
        <h4 className="footer-text">
          Built with{" "}
          <span>
            <FaHeart className="footer-heart" />
          </span>
        </h4>
        <h4 className="footer-text">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="footer-author">Sayyed Abrar Akhtar</span>
        </h4>
        <h4 className="footer-text">All rights reserved</h4>
      </div>
    </footer>
  )
}

export default Footer
