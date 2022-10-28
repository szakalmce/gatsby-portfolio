import React from "react"
import { servicesData } from "../data/data"

const Services = () => {
  const getMulti = (servicesData, num) => {
    const test = [...servicesData].sort(() => 0.5 - Math.random())

    return test.slice(0, num)
  }

  const randomArr = getMulti(servicesData, 3)

  return (
    <section className="section-wrapper bg-gray">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Services</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-wrapper">
          {randomArr.map(item => {
            const { id, name, icon, desc } = item
            return (
              <div key={id} className="services-item">
                <div className="serices-icon-wrapper">{icon}</div>
                <div className="services-title-wrapper">
                  <p className="services-title">{name}</p>
                  <div className="services-title-underline"></div>
                </div>
                <p className="services-desc">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
