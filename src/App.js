import React, { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import { Header } from './components/Header';
import { Button } from './components/Button';

function App() {
  const [ count, setCount ] = useState(0);
  const [ isRunning, switchRunning ] = useState(false);

  useInterval(() => {
    setCount(count + 1);
  }, isRunning);

  return (
    <div className="App">
      <Header name="person 🧘🏾‍♀️"/>
      <h2>Count is {count} and is {isRunning ? 'Running' : 'Stopped'}</h2>
      <Button text={isRunning ? 'Stop' : 'Start'}
        clickHandler={() => switchRunning(!isRunning)}
      />
    </div>
  );
}

export default App;
