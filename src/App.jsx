import { useState } from 'react'
import './App.css'
import PhaseCard from './PhaseCard.jsx'
import './index.css'


const phases = [
    {
        id: 1,
        day: 11,
        title: "JSX, components",
        description: "Learn JSX and React components."
    },
    {
        id: 2,
        day: 12,
        title: "Props",
        description: "Learn about React props."
    },
    {
        id: 3,
        day: 13,
        title: "useState Hook",
        description: "Learn about the useState hook."
    },
    {
        id: 4,
        day: 14,
        title: "Show phases using .map(), add a proper key to each",
        description: "Learn how to display a list of components using the .map() method and add unique keys."
    }
];

function App() {
    return (
        <div>
            <h1>Phase List</h1>

            {phases.map(phase => (
                <PhaseCard
                    key={phase.id}
                    day={phase.day}
                    title={phase.title}
                    description={phase.description}
                />
            ))}
        </div>
    );
}

export default App;
