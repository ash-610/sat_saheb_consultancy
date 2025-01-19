import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if(window.innerWidth < 500){
      setIsMobile(true)
    }
  
  }, )
  

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='header'>
      <div className='logo'>
        <img src='ssc_logo2.png'></img>
      </div>

      <div>
        {isMobile ? (showMenu ? 
        <>
        <div className='close-menu' onClick={toggleMenu} >x</div>
        <div className={showMenu ? 'menu-mobile' : 'menu'}>
          <Link href='#services'>Services</Link>
          <Link href='#our-work'>Our Work</Link>
          <Link href='#contact-us'>Contact Us</Link>
        </div>
        </>
        : <MenuIcon className='nav-menu-mob' onClick={toggleMenu} />)
        
        :
        <div className='menu'>
          <Link href='#services'>Services</Link>
          <Link href='#our-work'>Our Work</Link>
          <Link href='#contact-us'>Contact Us</Link>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Header