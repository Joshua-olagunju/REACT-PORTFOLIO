import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Skill } from "./pages/skill";
import { Project } from "./pages/project";
import { Experience } from "./pages/experience";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
    </>
  );
}

export default App;
