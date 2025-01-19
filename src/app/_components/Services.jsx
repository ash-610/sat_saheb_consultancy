import React, { useState } from 'react'
import './services.css'
import Card from './Card'

const Services = () => {

    const [services, setServices] = useState([
      {
        heading: "ISO(QMS) / TS",
        desc: "ISO (9001-2015) Audits, TS Documentation (PPAP, QC Tools, welder Qualification), etc."
      },
      {
        heading: "Design / Drawing",
        desc: "Mechanical, Civil and Electrical Drawings such as Jig-fixture, Guages, Components, Houses Layouts, etc."
      },
      {
        heading: "Accounts / Taxation",
        desc: "Balance Sheet Finalization, GST R(1, 2A, 3B), Income Tax, TDS/TCS, ESI, PF, Payroll, etc."
      }
    ])

  return (
    <>
      <div id='services' className='service-section'>
        <h1>Our Services</h1>

        <div className='services'>
          {
            services.map((service,index)=> (
              <Card key={index} heading={service.heading} desc={service.desc} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Services