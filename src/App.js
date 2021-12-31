// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Blog />
      <Contact />
    </main>
  );
}
