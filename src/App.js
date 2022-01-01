import React from "react";
import './App.css';
// import './css/style.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
// import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Blog />
      {/* <Contact /> */}
    </main>
  );
}
