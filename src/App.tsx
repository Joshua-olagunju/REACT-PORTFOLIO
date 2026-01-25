import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Skill } from "./pages/skill";
import { Project } from "./pages/project";
import { ChatBot } from "./pages/chatBot";
import { FAQs } from "./pages/faq";
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
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
