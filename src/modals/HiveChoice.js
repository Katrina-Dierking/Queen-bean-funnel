import React from 'react'
import { Link } from "react-router-dom";
import './hiveChoice.scss'

const HiveChoice = ({title, img, alt, para, link,text}) => {
  return (
    <section className="hiveChoice">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{para}</p>
      <Link to={link} target="_blank">
        <button className="hivebutton">{text}</button>
      </Link>
    </section>
  );
}

export default HiveChoice