import React from 'react'
import './main.css'
import headshot from '../myHeadshot.png'
import laptop from '../images/laptop.png'

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