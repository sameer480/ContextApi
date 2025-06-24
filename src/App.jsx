import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import { CounterProvider } from './counter-context';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main style={{ padding: '20px' }}>
        <p>This is the main content of the app.</p>
      </main>
      <CounterProvider>
        <div style={{ padding: '40px', fontFamily: 'Arial' }}>
          <h1>React Counter with Context</h1>
          <CounterDisplay />
          <CounterControls />
        </div>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;