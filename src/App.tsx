import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function AppInner() {
  useEffect(() => {
    const update = () => {
      const sections = ['home', 'about', 'projects', 'education', 'contact'];
      const mid = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
          document.title = `${id.charAt(0).toUpperCase() + id.slice(1)} — Rohith Mamidala`;
          return;
        }
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="relative min-h-screen theme-bg">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollProgress />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
