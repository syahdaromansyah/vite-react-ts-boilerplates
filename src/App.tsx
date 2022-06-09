import { useState } from 'react';
import viteLogo from './favicon.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={viteLogo} className="App-logo App-logo-vite" alt="logo" />

        <p className="App-hello">Hello Vite + React + Typescript! 👋</p>
        <p>
          <button
            type="button"
            onClick={() => setCounter((count) => count + 1)}
          >
            Count is {counter} {counter === 0 ? 'time' : 'times'}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
