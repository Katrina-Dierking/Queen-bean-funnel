import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <div className='nav'>
        <Link to="/blog">BLOG</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
   </div>
  )
}

export default Nav