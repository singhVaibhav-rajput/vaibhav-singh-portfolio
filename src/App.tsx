import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero-section";
import About from "./components/About/About";
import Projects from "./components/Project/Project-section";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;