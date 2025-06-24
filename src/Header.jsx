import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <header style={styles}>
      <h1>Welcome to My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </header>
  );
}

export default Header;
