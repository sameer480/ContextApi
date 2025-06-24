import React, { useContext } from 'react';
import { CounterContext } from './counter-context';

function CounterControls() {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={decrement} style={{ marginRight: '10px' }}>- Decrement</button>
      <button onClick={increment}>+ Increment</button>
    </div>
  );
}

export default CounterControls;
