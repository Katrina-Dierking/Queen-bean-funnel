import React from 'react'

const Layout = ({title, children}) => {
  return (
   <section className='layout'>
        <h1>{title}</h1>
        <main>{children}</main>
   </section>
  )
}

export default Layout