import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="bg-slate-50 text-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Chatbot />
    </div>
  );
}

export default App;
