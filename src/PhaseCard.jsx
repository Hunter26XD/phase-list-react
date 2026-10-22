import React, { useState } from 'react';
import './index.css'

function PhaseCard(props) {
    return (
        <div className="phase-card">
            <h3>Day {props.day} - {props.title}</h3>
            <p>{props.description}</p>

            <button
                className="button-icon"
                onClick={props.toggleDone}
            >
                {props.done ? 'Complete' : 'Mark as Complete'}
            </button>

            {props.done && <p>Completed!</p>}
        </div>
    );
}

export default PhaseCard;