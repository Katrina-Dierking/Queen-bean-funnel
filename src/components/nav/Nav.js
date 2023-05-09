import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {
  return (
   <div className='nav'>
   <Link to="/">HOME</Link>
        <a href to="/blog">BLOG</a>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
   </div>
  )
}

export default Nav