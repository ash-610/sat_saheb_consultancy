"use client"

import React from 'react'
import "./carousel.css"
import { useState } from 'react'

const Carousel = () => {

    const [slide, setSlide] = useState('slide1')
    const [images, setImages] = useState([
        {
            name: "accounting",
            path: "accounting.jpg"
        },
        {
            name: "drawings",
            path: "drawings.jpg"
        },
        {
            name: "auditing",
            path: "iso.jpg"
        }
    ])


    const changeSlide = () => {
        if(slide == 'slide1'){
            setSlide('slide2')  
        }
        else if(slide == 'slide2'){
            setSlide('slide3')
        }
        else{
            setSlide('slide1')
        }
        return slide
    }

    setInterval(()=>{changeSlide()},4000)

  return (
    <>
        <div className='slide-container'>
            <div className='slide-header'>
                <h1>Sat Saheb Consultancy <span>A Techno Commercial Consultancy</span></h1>
            </div>

            <div className='slider'>
                {
                    images?.map((img,index) => (
                        <img className='slide' key={index} src={img.path} alt={img.name}></img>
                    ))
                }
            </div>

            <div className='slide-footer'>
                <h1>Efficient Solutions in Accounting, ISO Auditing, Design & Drawings</h1>
            </div>
        </div>
    </>
  )
}

export default Carousel