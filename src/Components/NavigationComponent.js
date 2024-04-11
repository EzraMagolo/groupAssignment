import React from 'react';
import { useNavigation } from '../Navigation';

const NavigationComponent = () => {
  const { navigateTo } = useNavigation();

  return (
    <div>
      <button onClick={() => navigateTo('home')}>Home</button>
      <button onClick={() => navigateTo('about')}>About</button>
      <button onClick={() => navigateTo('contact')}>Contact</button>
    </div>
  );
};

export default NavigationComponent;
