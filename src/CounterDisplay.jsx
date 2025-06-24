import React, { useContext } from 'react';
import { CounterContext } from './counter-context';

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return (
    <div style={{ marginBottom: '20px', fontSize: '24px' }}>
      Current Count: <strong>{count}</strong>
    </div>
  );
}

export default CounterDisplay;
