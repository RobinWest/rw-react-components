import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nothing much to see here!</p>
        <p>Run <code>npm run storybook</code> to see the component playground.</p>
      </header>
    </div>
  );
}

export default App;
