import React, { useState } from 'react';
import { useInterval } from './hooks/useInterval';

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
