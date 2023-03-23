import React from 'react'
import './middle.css'
import crafter from './crafter.jpg'
import business from './business.jpg'
import homeschooler from './homeschooler.jpg'
import bee from "./bee.png";


function Middle() {
  return (
    <>
    <section className="middleBack">
      <section className="middle">
        <section className=" categories leftMiddle">
          <img src={crafter} alt="crafter" />
          <h2>CRAFTER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            delectus? Incidunt adipisci iusto illo eligendi dolor laborum
            provident maxime magnam, eius, similique odio, pariatur veniam vitae
            distinctio eum tempora sed?
          </p>
          <button className="button"> - FIND OUT MORE</button>
        </section>

        <section className=" categories middleMiddle">
          <img src={homeschooler} alt="homeschooler" />
          <h2>HOMESCHOOLER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            delectus? Incidunt adipisci iusto illo eligendi dolor laborum
            provident maxime magnam, eius, similique odio, pariatur veniam vitae
            distinctio eum tempora sed?
          </p>
          <button className="button"> - FIND OUT MORE</button>
        </section>

        <section className=" categories rightMiddle">
          <img src={business} alt="business owner" />
          <h2>BUSINESS OWNER</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            delectus? Incidunt adipisci iusto illo eligendi dolor laborum
            provident maxime magnam, eius, similique odio, pariatur veniam vitae
            distinctio eum tempora sed?
          </p>
          <button className="button"> - FIND OUT MORE</button>
          </section>
        </section>
        </section>
        <img src={bee} className="bee" />
        </>
  );
}

export default Middle