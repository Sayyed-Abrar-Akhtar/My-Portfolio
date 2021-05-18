import React from "react"
import { FaShopify, FaCode, FaAndroid } from "react-icons/fa"
let id = 0
const services = [
  {
    id: `${(id += 1)}`,
    icon: <FaShopify className="service-icon" />,
    title: "shopify development",
    text: `I'm an experienced shopify developer. I can help you with creating and managing products and collections, creating custom themes for shoify and much more.`,
  },
  {
    id: `${(id += 1)}`,
    icon: <FaCode className="service-icon" />,
    title: "web design and development",
    text: `I had designed and developed a user centric ecommerce clothing application from scratch. I can help you with design and development of complete web application using modern tools and technology`,
  },
  {
    id: `${(id += 1)}`,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `I have designed and developed an ecommerce application with admin functionality. I can help you with designing and developing modern android applications.`,
  },
]

export default services
