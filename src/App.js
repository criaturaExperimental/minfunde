import React, { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import { timeFormatter } from './timeFormatter';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [ count, setCount ] = useState(0);
  const [ isRunning, switchRunning ] = useState(false);
  const [ total, setTotal ] = useState(0);
  const [ percentage, setPercentage ] = useState(100);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
      setPercentage(calculatePercentage());
    } else {
      stopTimer();
    }
  }, isRunning);

  function increaseTime() {
    setCount(count + 1);
    setPercentage(100);
  }
  function decreaseTime() {
    setCount(count - 1);
    setPercentage(100);
  }

  function startTimer() {
    setTotal(count);
    switchRunning(!isRunning);
  }

  function stopTimer() {
    switchRunning(!isRunning);
  }

  function calculatePercentage() {
    return ((count - 1) * 100) / total;
  }

  return (
    <div className="App">
      <Header name="🧘🏾‍♀️"/>
      <p>Total count was {total}</p>
      <p>{count}</p>
      <ProgressBar percentage={percentage}/>
      <h2>Count is {timeFormatter(count)} and is {isRunning ? 'running' : 'stopped'}</h2>
      <Button text={isRunning ? 'Stop' : 'Start'}
        clickHandler={startTimer}
      />
      <Button text="Increase time" clickHandler={increaseTime}/>
      <Button text="Decrease time" clickHandler={decreaseTime}/>
    </div>
  );
}

export default App;
