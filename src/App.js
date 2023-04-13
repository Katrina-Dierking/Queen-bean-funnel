
import './app.css'

import Middle from './components/middle/Middle';
import Bee from './assets/lotties/Bee';

import Bottom from './components/bottom/Bottom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



function App() {
  return (
    <section>
      <Header/>
      <Bee />
      <Middle />
      <Bottom />
      <Footer />
    </section>
  );
}

export default App;
