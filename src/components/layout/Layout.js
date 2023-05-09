import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './layout.scss'
import Nav from '../nav/Nav'

const Layout = ({title, children}) => {
  return (
   <section className='layout'>
        <Nav />
        <Header />
        <h1>{title}</h1>
        <main>{children}</main>
        <Footer />
   </section>
  )
}

export default Layout