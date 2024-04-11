import React from 'react';
import Navigation from './Components/NavigationComponent';
import ThemeToggle ,{ ThemeProvider } from './Components/ThemeComponent';
import DatabaseUpdate from './Components/DatabaseRetrieval';
import { NavigationProvider } from './Navigation';

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <div>
          <h1>Assignment</h1>
          <Navigation />
          <ThemeToggle />
          <DatabaseUpdate />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;

