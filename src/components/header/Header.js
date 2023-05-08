import React from 'react'
import './header.scss'
import bee from '../../assets/images/bee.png'
import logo from '../../assets/images/QueenBeanLogo.png'

function Header() {
  return (
    <header>
      <section className="headerOne">
        <div className='titleSub'>
          <h2>QUEEN BEAN DESIGN CAFE</h2>
          <h5>Create | Code | Collaborate</h5>
        </div>
        <img src={logo} className="coffee" alt = "coffee"/>
      </section>
      <section className="headerTwo">
 
        <input type="text" placeholder="Enter your email for the latest QBDC news"></input>
        <img src={bee} className="headerBee" alt="flying bee"/>

        <button type="submit">Yes! I want in!</button>
    </section>
    </header>
  );
}

export default Header