import React from 'react'
import Card from './Card'
import './ourwork.css'
import { useState } from 'react'

const OurWork = () => {

    const [workImages, setWorkImages] = useState([
        "transformer.png",
        "transformer2.png",
        "cnc.png"
    ])

  return (
    <div id='our-work' className='our-work'>
        <h1>Our Work</h1>

        <div className='work-img'>
            {
                workImages.map((image,index)=>( <Card key={index} img={image}/> ))
            }
        </div>
    </div>
  )
}

export default OurWork