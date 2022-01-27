import './App.css';
import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
