
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import { Contact } from 'lucide-react';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const updateTitle = () => {
      const sections = ['home', 'about', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
            document.title = `${sectionName} - Rohith Mamidala`;
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', updateTitle);
    updateTitle();

    return () => window.removeEventListener('scroll', updateTitle);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
