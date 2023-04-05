import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
      <section className="mainFoot">
        <section className="leftFoot">
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Connect</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="rightFoot">
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Connect</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        </section>
        <section className='copyright'>
        
        <p> © Copyright 2023 Katrina Dierking | Queen Bean Design Cafe | All rights reserved</p>
        </section>
    </footer>
  );
}

export default Footer