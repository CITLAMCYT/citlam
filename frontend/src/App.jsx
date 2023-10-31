import React from 'react';
import './App.css';
import { Nav, Footer, Main } from './components/index.js';

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
        <main>
          <Main/>
        </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
