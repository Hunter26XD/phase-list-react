import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h1>Phase List</h1>
        <h2>My Learning Journey</h2>

        <div className="phase-list">
          <div className="phase-item">
            <h3>Day 11 - react</h3>
              <p>Learn react set up.</p>
          </div>

          <div className="phase-item">
            <h3>Day 12 - Props</h3>
            <p>Learn about React props.</p>
          </div>

          <div className="phase-item">
            <h3>Day 13 - useState</h3>
              <p>Learn about the useState hook.</p>
          </div>
        </div>
      </div>
    );
}

export default App;