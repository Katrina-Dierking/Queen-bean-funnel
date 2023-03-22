import React from 'react'
import './middle.css'

function Middle() {
  return (
    <section className="middle">
      <section className=" categories leftMiddle">
        <img src="#" alt="crafter" />
        <h2>Crafter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          delectus? Incidunt adipisci iusto illo eligendi dolor laborum
          provident maxime magnam, eius, similique odio, pariatur veniam vitae
          distinctio eum tempora sed?
        </p>
        <button className="button"> - FIND OUT MORE</button>
      </section>

      <section className=" categories middleMiddle">
        <img src="#" alt="homeschooler" />
        <h2>Homeschooler</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          delectus? Incidunt adipisci iusto illo eligendi dolor laborum
          provident maxime magnam, eius, similique odio, pariatur veniam vitae
          distinctio eum tempora sed?
        </p>
        <button className="button"> - FIND OUT MORE</button>
      </section>

      <section className=" categories rightMiddle">
        <img src="#" alt="business owner" />
        <h2>Business Owner</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          delectus? Incidunt adipisci iusto illo eligendi dolor laborum
          provident maxime magnam, eius, similique odio, pariatur veniam vitae
          distinctio eum tempora sed?
        </p>
        <button className="button"> - FIND OUT MORE</button>
      </section>
    </section>
  );
}

export default Middle