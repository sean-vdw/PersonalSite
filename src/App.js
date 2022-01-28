import './App.css';
import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
