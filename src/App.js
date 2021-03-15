import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import addTwo from 'easyaesthetic';

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber((n) => addTwo(number));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The number is {number}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
