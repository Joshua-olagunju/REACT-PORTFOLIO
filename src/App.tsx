import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Skill } from "./pages/skill";
import { Project } from "./pages/project";
import { ChatBot } from "./pages/chatBot";
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
      <ChatBot />
      <Skill />

      {/* <Experience /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
