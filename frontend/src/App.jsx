import React from 'react';
import './App.css';
import { Nav, Footer } from './components/index.js';

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
        
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
