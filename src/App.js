import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';

import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/portfolio/Portfolio';
import Nav from './components/Nav';
import Education from './components/Education';

function App() {
  return (
    <div>
      <main className=" font-Poppins p-10 ">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Education />
        <Portfolio />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
