
import './app.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './views/home/Home'
import Home from './views/home/Home';
import About from './views/about/About';
import Contact from './views/contact/Contact';




function App() {
  return (
   <section className='app'>
   <BrowserRouter>
     <Routes>
       <Route exact path = "/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact/>} />
     </Routes>
   </BrowserRouter>
   </section>


  );
}

export default App;
