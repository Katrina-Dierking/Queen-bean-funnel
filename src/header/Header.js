import React from 'react'
import './header.css'
import bee from './bee.png'
import coffee from './coffee.png'

function Header() {
  return (
    <header>
      <section className="headerOne">
      <h2>QUEEN BEAN DESIGN CAFE</h2>
      <img src={coffee} className="coffee"/>
      </section>
      <section className="headerTwo">
      <input type="text" placeholder="Enter your email"></input>
      <img src={bee} className="bee"/>
      <button type="submit">Yes! I want in!</button>
    </section>
    </header>
  );
}

export default Header