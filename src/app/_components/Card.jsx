import React, { useState } from 'react'
import './card.css'

const Card = ({heading, desc, img}) => {
  const [toggleOption, setToggleOption] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const handleMouseEnter = () => {
    setToggleOption(true)
  }
  const handleMouseLeave = () => {
    setToggleOption(false)
  }
  const handleClick = (e) => {
    console.log(e)
    setShowImage(true)
  }
  const handleCancel = () => {
    setShowImage(false)
  }


  return (
    <>
        {
          img ? (
          <>
            <div className='card-img'>
              <img src={img}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} ></img>
              {toggleOption && <div className='img-overlay'><p>See Drawing</p></div>}
            </div>
            {showImage && 
              <div className='img-view-container'>
                <div className='img-view' >
                <img src={img}></img>
                <div className='cancel-img' onClick={handleCancel} >x</div>
                </div>
              </div>
            }
          </>
          ) : (
            <div className='card-info'>
              <h3>{heading}</h3>
              <p>{desc}</p>
            </div>
          )
        }
    </>
  )
}

export default Card