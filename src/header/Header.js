import React from 'react'
import './header.css'
import bee from './bee.png'

function Header() {
  return (
    <header>
      <section className="headerOne">
        <img src={bee} />
        <h2>QUEEN BEAN DESIGN CAFE</h2>
      </section>
    <section className="headerTwo">
      <input type="text" placeholder="Enter your email"></input>
      <button type="submit">Yes! I want in!</button>
    </section>
    </header>
  );
}

export default Header