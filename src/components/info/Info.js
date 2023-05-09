import React from 'react'
import './info.scss'

const Info = () => {
  return (
    <section className="info">
      <div className="cont">
        <h3>Are you ready to turn tomorrow's dreams into today's reality?</h3>
        <p>
          Hi, I'm Katrina Dierking, founder of
          <span> Queen Bean Design Cafe</span> where if you can dream it, we can
          design it and make it a reality.
          <p>Whether it's:</p>
          <ul>
            <li>
              {" "}
              <span className='create'>creating</span> ideas for a homebased business
            </li>
            <li>
              a place to <span className='code'>code </span>along and break into the tech
              industry
            </li>
            <li>
              homeschooling community full of resources and{" "}
              <span className='collab'>collaboration</span>
            </li>
          </ul>
          we've got you covered.
        </p>
      </div>
    </section>
  );
}

export default Info