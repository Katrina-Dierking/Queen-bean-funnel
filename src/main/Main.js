import React from 'react'
import './main.css'
import headshot from '../myHeadshot.png'

function Main() {
  return (
   <main>
    <section className='mainInsert'>
    
      <section className='leftMain'>
          <img src={headshot}  className="headshot" alt="Katrina Dierking headshot"/>
          <h2>KATRINA DIERKING</h2>
          <div className='icons'>

          <p>SOFTWARE ENGINEER </p>
          </div>
      </section>
      <section className='rightMain'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus deserunt qui illo accusantium corrupti impedit numquam, similique laborum nisi quaerat, aliquam magni distinctio neque expedita nam, id obcaecati eius laudantium?</p>
          <img src="#" />
      </section>
    </section>
   </main>
  )
}

export default Main