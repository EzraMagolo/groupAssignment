import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
    console.log(`Theme toggled to ${theme === 'light' ? 'dark' : 'light'}`);
  };

  return (
    <div>
      <button onClick={handleThemeToggle}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
      <div style={{ background: theme === 'light' ? '#f0f0f0' : '#333', padding: '20px', marginTop: '20px' }}>
        <h2>Theme </h2>
        <p>Current Theme: {theme}</p>
      </div>
    </div>
  );
};

export default ThemeComponent;
