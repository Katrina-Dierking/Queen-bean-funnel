import React from 'react'
import './main.scss'
import headshot from '../myHeadshot.png'

function Main() {
  return (
    <main>
      <section className="mainInsert">
        <section className="leftMain">
          <img
            src={headshot}
            className="headshot"
            alt="Katrina Dierking headshot"
          />
          <h2>KATRINA DIERKING</h2>
    
        </section>
        <section className="rightMain">
   
           <p></p>
          <img src="#" alt="" />
        </section>
      </section>
    </main>
  );
}

export default Main