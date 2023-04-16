import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <div className='h-20'>
        <Navbar />
      </div>
      <Home />
  
      <About />

      <Experience />

      <Contact/>
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;