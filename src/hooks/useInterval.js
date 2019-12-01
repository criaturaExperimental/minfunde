import { useEffect, useRef } from 'react';

export function useInterval(callback, isRunning) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (isRunning) {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [isRunning]);
}