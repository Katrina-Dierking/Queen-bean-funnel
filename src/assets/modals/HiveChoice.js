import React from 'react'

const HiveChoice = ({title, img, alt, para, extraText, text}) => {
  return (
    <section className='hiveChoice'>
        <img src={img} alt = {alt}/>
        <h2>{title}</h2>
        <p>{para}</p>
        <button className='button'>{text}</button>
    </section>
  )
}

export default HiveChoice