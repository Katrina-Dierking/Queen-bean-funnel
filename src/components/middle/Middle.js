import React from 'react'
import './middle.scss'
import crafter from './crafter.jpg'
import business from './business.jpg'
import homeschooler from './homeschooler.jpg'
import bee from "./bee.png";
import HiveChoice from '../../assets/modals/HiveChoice'



function Middle() {

  
  return (
    <>
      <section className="middleBack">
        <section className="middle">
          <section className=" categories leftMiddle">
            <HiveChoice 
             img = {crafter} alt="crafter" 
             title = "CREATE"
             para="
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
               delectus? Incidunt adipisci iusto illo eligendi dolor laborum
               provident maxime magnam, eius, similique odio, pariatur veniam
               vitae distinctio eum tempora sed?
             "
             text = "FIND OUT MORE"
            />
          </section>

          <section className=" categories middleMiddle">
            <HiveChoice 
            img ={business} alt="business owner"
            title="CODE"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              delectus? Incidunt adipisci iusto illo eligendi dolor laborum
              provident maxime magnam, eius, similique odio, pariatur veniam
              vitae distinctio eum tempora sed?"
            text="- FIND OUT MORE"
            />
          </section>

          <section className=" categories rightMiddle">
            <HiveChoice 
            img ={homeschooler} alt="homeschooler"
            title="COLLABORATE"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              delectus? Incidunt adipisci iusto illo eligendi dolor laborum
              provident maxime magnam, eius, similique odio, pariatur veniam
              vitae distinctio eum tempora sed?"
            text=" - FIND OUT MORE"
            
            />
          </section>
        </section>
      </section>
      <img src={bee} className="bee" alt="bee logo" />
    </>
  );
}

export default Middle