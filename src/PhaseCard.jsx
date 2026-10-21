import React, { useState } from 'react';
import './index.css'

function PhaseCard(props) {
    const [done, setDone] = useState(false);

    function toggleDone() {
        setDone(!done);
}
    return (
        <div className="phase-card">
            <h3>Day {props.day} - {props.title}</h3>
            <p>{props.description}</p>
            <button className="button-icon" onClick={toggleDone}>
                {done ? 'Complete' : 'Mark as Complete'}
            </button>
            {done && <p>Completed!</p>}
        </div>
    );
}

export default PhaseCard;