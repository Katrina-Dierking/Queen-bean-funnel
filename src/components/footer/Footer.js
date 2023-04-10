import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import facebook from '../../images/facebook.png'
import pinterest from '../../images/pinterest.png'
import youtube from '../../images/youtube.png'

function Footer() {
  return (
    <footer>
      <section className="mainFoot">
        <section className="leftFoot">
          <nav>
            
              <img src={facebook} alt="facebook" />
              <img src={pinterest} alt="pinterest" />
              <img src={youtube} alt="youtube" />
            
          </nav>
        </section>

        <section className="rightFoot">
          <nav>
            <ul>
              <li>
                <a href="#">ABOUT</a>
              </li>
          
              <li>
               <a href="#">CONTACT</a>
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