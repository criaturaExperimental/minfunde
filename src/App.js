import React, { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import { timeFormatter } from './timeFormatter';

import { Header } from './components/Header';
import { Button } from './components/Button';


function App() {
  const [ count, setCount ] = useState(0);
  const [ isRunning, switchRunning ] = useState(false);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      switchRunning(false);
    }
  }, isRunning);

  function increaseTime() {
    setCount(count + 1);
  }
  function decreaseTime() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <Header name="person 🧘🏾‍♀️"/>
      <h2>Count is {timeFormatter(count)} and is {isRunning ? 'running' : 'stopped'}</h2>
      <Button text={isRunning ? 'Stop' : 'Start'}
        clickHandler={() => switchRunning(!isRunning)}
      />
      <Button text="Increase time" clickHandler={increaseTime}/>
      <Button text="Decrease time" clickHandler={decreaseTime}/>
    </div>
  );
}

export default App;
