// import logo from './logo.svg';
import './App.css';
import Home from './componet/Home';
import About from './componet/About'
import Work from './componet/Work'
import Testimonials from './componet/Testimonials';
import Contact from './componet/Contact';
import Footer from './componet/Footer';




function App() {
  return (
    <div className="App">
     <Home />
     <About />
     <Work />
     <Testimonials />
     <Contact />
     <Routes>
     <Route path = '/' element = {<Home/>}/>
     <Route path = '/about' element = {<About/>}/>
     <Route path = '/testimonials' element = {<Testimonials/>}/>
     </Routes>
     <Footer />
     


     

    </div>
  );
}

export default App;
