import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
}

function App() {
  const [ count, setCount ] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  });

  return (
    <div className="App">
      <h2>Count is {count}</h2>
    </div>
  );
}

export default App;
