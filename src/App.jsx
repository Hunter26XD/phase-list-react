import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import PhaseCard from './PhaseCard.jsx'

function App() {
  return (
    <div>
      <h1>Phase List</h1>
        <h2>My Learning Journey</h2>
        <PhaseCard
          day={11}
          title="React Setup"
          description="Learn react set up."
        />
        <PhaseCard
          day={12}
          title="Props"
          description="Learn about React props."
        />
        <PhaseCard
          day={13}
          title="useState"
          description="Learn about the useState hook."
        />
    </div>
    );
}

export default App;