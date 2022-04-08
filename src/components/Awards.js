import React, { useEffect, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineEye, AiOutlineCloseCircle } from "react-icons/ai"

const Awards = ({ title = "", imageUrl = "" }) => {
  const [certificateIsVisible, setCertificateIsVisible] = useState(false)
  const [certificateImgSrc, setCertificateImgSrc] = useState("")

  useEffect(() => {
    if (certificateIsVisible) {
      setCertificateImgSrc(imageUrl)
    }
  }, [certificateIsVisible, imageUrl])

  const showCertificate = (e, src) => {
    setCertificateIsVisible(true)
  }

  const closeCertificateDisplay = () => {
    setCertificateIsVisible(false)
  }

  return (
    <>
      <section className="awards">
        <GatsbyImage
          image={imageUrl}
          placeholder="blurred"
          className="award_img"
          alt={title}
        />
        <h3 className="award_title">
          {title}
          <span className="view_control">
            <AiOutlineEye
              className="view_icon"
              onClick={e => showCertificate(e, imageUrl)}
            />
          </span>
        </h3>
      </section>
      {certificateIsVisible && (
        <section className="display_award_container">
          <span className="award_close_icon">
            <AiOutlineCloseCircle
              className="close_icon"
              onClick={closeCertificateDisplay}
            />
          </span>
          <section className="award_container">
            <GatsbyImage
              image={certificateImgSrc}
              placeholder="blurred"
              className="view_award_img"
              alt={title}
            />
          </section>
        </section>
      )}
    </>
  )
}

export default Awards
