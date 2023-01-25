import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo-2.png';
import App from './App';
import { Canvas } from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Canvas shadows>
        <App />
      </Canvas>

      <button className='btn--sound'>
        <span className="material-symbols-rounded">music_note</span>
      </button>

      <footer>
        
      </footer>
  </React.StrictMode>
);
