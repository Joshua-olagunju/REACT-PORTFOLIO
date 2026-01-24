import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Skill } from "./pages/skill";
import { Project } from "./pages/project";
// import { Experience } from "./pages/experience";
import { Contact } from "./pages/contact";
import { Footer } from "./pages/footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Project />
      <About />
      <Skill />

      {/* <Experience /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
