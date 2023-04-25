
import './app.css'

import Middle from './components/middle/Middle';
import Bee from './assets/lotties/Bee';

import Bottom from './components/bottom/Bottom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';



function App() {
  return (
    <section>
    <Nav />
      <Header/>
      <Bee />
      <Middle />
      <Bottom />
      <Footer />
    </section>
  );
}

export default App;
