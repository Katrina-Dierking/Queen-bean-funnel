import React from 'react'
import Nav from '../../components/nav/Nav'
import Header from '../../components/header/Header';
import Middle from '../../components/middle/Middle';
import Bottom from '../../components/bottom/Bottom'
import Footer from '../../components/footer/Footer';
import Bee from '../../assets/lotties/Bee'
import CTA from '../../components/cta/CTA';
import Info from '../../components/info/Info';


function Home() {
  return (
    <section className="home">
      <Nav />
      <Header />
      <Bee />
      <Middle />
      <Bottom />
      <Info />
      <CTA />
      <Footer />
    </section>
  );
}

export default Home
