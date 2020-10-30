import './App.css';
import React from 'react';

// sections
import Hero from './components/sections/hero/hero.component';

function App() {
  const x = 'hi';

  if (x)
    return (
      <div className="App">
        <Hero />
      </div>
    );
}

export default App;
