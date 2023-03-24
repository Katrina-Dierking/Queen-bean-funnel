import React from 'react'
import Lottie from "react-lottie";
import * as animationData from "./Bee.json";
import './bee.css'
import hive from '../images/FindYourHive.png'

export default function Bee() {

     const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: animationData.default,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };

  return (
    <>
      <section className="beeAnimation">
        <Lottie options={defaultOptions} height={200} width={200} />
      </section>
      <section className="hive">
      <img src={hive} alt="find your hive with arrow" />
      </section>
    </>
  );
}

