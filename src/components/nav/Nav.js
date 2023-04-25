import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

function Nav() {
  return (
   <div className='nav'>
        <a href to="/blog">BLOG</a>
        <a href to="/about">ABOUT</a>
        <a href to="/contact">CONTACT</a>
   </div>
  )
}

export default Nav