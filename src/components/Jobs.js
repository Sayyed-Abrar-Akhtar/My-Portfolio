import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiExperiences(sort: { fields: type, order: ASC }) {
      nodes {
        info {
          company
          date
          infoId: id
          position
          desc {
            descId: id
            name
          }
        }
        strapiId
        type
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiExperiences: { nodes: experiences },
  } = data

  const [value, setValue] = React.useState(0)
  const [project, setProject] = React.useState(0)
  const { date, desc } = experiences[value].info[project]

  return (
    <section className="section jobs">
      <Title title="Experiences" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {experiences.map((experience, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={experience.strapiId}
                onClick={() => {
                  setValue(index)
                  setProject(0)
                }}
              >
                {experience.type}
              </button>
            )
          })}
        </div>
        {/* jobs info */}
        <article className="job-info">
          <h3>{experiences[value].info[project].company}</h3>
          {experiences[value].info.map((info, index) => {
            return (
              <span
                tabindex={index}
                role="tab"
                className={`job-company${
                  index === project ? " job-company--active" : ""
                }`}
                key={info.infoId}
                onClick={() => setProject(index)}
                onKeyPress={e => console.log(e)}
              >
                {info.position}
              </span>
            )
          })}
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.descId} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
