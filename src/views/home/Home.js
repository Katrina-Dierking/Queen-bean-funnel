import React from 'react'
import Middle from "./components/middle/Middle";
import Bee from "./assets/lotties/Bee";

import Bottom from "./components/bottom/Bottom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Home() {
  return (
    <section className="home">
      <Header />
      <Bee />
      <Middle />
      <Bottom />
      <Footer />
    </section>
  );
}

export default Home
