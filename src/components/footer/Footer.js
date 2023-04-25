import React from 'react'
import {Link} from 'react-router-dom'
import './footer.scss'
import facebook from '../../assets/images/facebook.png'
import pinterest from '../../assets/images/pinterest.png'
import youtube from '../../assets/images/youtube.png'

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

        
        </section>
        <section className='copyright'>
        
        <p> © Copyright 2023 Katrina Dierking | Queen Bean Design Cafe | All rights reserved</p>
        </section>
    </footer>
  );
}

export default Footer