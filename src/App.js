import React, { useState } from 'react';
import { Header } from './components/Header';
import { Timer } from './components/Timer';

function App() {
  const [clock, setClock] = useState(0);
  return (
    <div className="App">
      <Header name="person 🧘🏾‍♀️" />
      <Timer time={clock} clockHandler={setClock} />
    </div>
  );
}

export default App;
