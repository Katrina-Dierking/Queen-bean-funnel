import React from 'react'
import './middle.scss'
import crafter from './crafter.jpg'
import business from './business.jpg'
import homeschooler from './homeschooler.jpg'
import bee from "./bee.png";
import HiveChoice from '../../modals/HiveChoice'



function Middle() {

  
  return (
    <>
      <section className="middleBack">
        <section className="middle">
          <section className=" categories leftMiddle">
            <HiveChoice
              img={crafter}
              alt="crafter"
              title="CREATE"
              para="
               Launching a home-based crafting business is hard work, but so worth it. Not sure where to get started? Join the
               Queen Bean Creation-Hive
               to get new business ideas, learn how to design/create/produce a wide range of hand-made products, and get the mentoring you need to make your dreams a reality.
             "
              text="FIND OUT MORE"
              link="https://blog.queenbeandesigncafe.com"
            />
          </section>

   
          <section className=" categories middleMiddle">
              <HiveChoice
                img={business}
                alt="business owner"
                title="CODE"
                para="Are you a new developer looking for a place to code with other new devs? Are you a dev who has been effected by the recent layoffs? Are you looking for a meaningful project to contribute to and use as experience? Queen Bean Code Hive has a place for you. Contribute, learn, mentor others. Sharpen your skills while getting real-world experience."
                text="FIND OUT MORE"
              />
              </section>
           

          <section className=" categories rightMiddle">
            <HiveChoice
              img={homeschooler}
              alt="homeschooler"
              title="COLLABORATE"
              para="Are you new to homeschooling and need a community built just for other homeschooling moms in your shoes? Queen Bean Homeschooling Mom Hive is a social app built just for homeschoolers. Find virtual classes for your students run by other homeschooling moms, or teach a class yourself. Buy/Sell resources. Enjoy a monthly virtual Moms' Night Out and more."
              text="FIND OUT MORE"
            />
          </section>
        </section>
      </section>
      <img src={bee} className="bee" alt="bee logo" />
    </>
  );
}

export default Middle