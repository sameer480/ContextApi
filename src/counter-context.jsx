import React, { createContext, useState } from 'react';

// Create the context
export const CounterContext = createContext();

// Provider component
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  const value = { count, increment, decrement };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}
