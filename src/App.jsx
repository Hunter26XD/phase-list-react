
import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import PhaseCard from './PhaseCard.jsx';

const initialPhases = [
    {
        id: 1,
        day: 11,
        title: "JSX, components",
        description: "Learn JSX and React components.",
        done: false
    },
    {
        id: 2,
        day: 12,
        title: "Props",
        description: "Learn about React props.",
        done: false
    },
    {
        id: 3,
        day: 13,
        title: "useState Hook",
        description: "Learn about the useState hook.",
        done: false
    },
    {
        id: 4,
        day: 14,
        title: "Rendering Lists",
        description: "Learn .map() and unique keys.",
        done: false
    }
];

function App() {
    const [phases, setPhases] = useState(() => {
        try {
            const saved = localStorage.getItem('phases');
            return saved ? JSON.parse(saved) : initialPhases;
        } catch {
            return initialPhases;
        }
    });

    useEffect(() => {
        localStorage.setItem('phases', JSON.stringify(phases));
    }, [phases]);

    function toggleDone(id) {
        setPhases(prevPhases =>
            prevPhases.map(phase =>
                phase.id === id
                    ? { ...phase, done: !phase.done }
                    : phase
            )
        );
    }

    return (
        <div>
            <h1>Phase List</h1>

            {phases.map(phase => (
                <PhaseCard
                    key={phase.id}
                    day={phase.day}
                    title={phase.title}
                    description={phase.description}
                    done={phase.done}
                    toggleDone={() => toggleDone(phase.id)}
                />
            ))}
        </div>
    );
}

export default App;
