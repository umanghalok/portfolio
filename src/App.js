import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
