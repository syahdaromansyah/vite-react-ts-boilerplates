import { useState } from 'react';
import viteLogo from './favicon.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="mb-8">
          <img
            src={viteLogo}
            className="App-logo App-logo-vite inline-block transform transition-transform duration-300 hover:scale-125 hover:rotate-6"
            alt="logo"
          />
        </div>

        <p className="App-hello mb-8">Hello Vite + React + Typescript! 👋</p>
        <p className="bg-indigo-800 px-4 py-2 rounded-md mb-8">
          Style amazingly with Tailwind CSS ✨
        </p>
        <p className="mb-4">
          <button
            type="button"
            className="inline-block bg-slate-100 text-slate-800 px-2 py-1 rounded transform transition-transform duration-200 active:scale-95"
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
