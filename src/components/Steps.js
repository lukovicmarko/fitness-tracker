import React from 'react'

function Steps({ steps, calculateDistance, calculateActivity }) {
    return (
        <div className="steps">
            <div className="circle">
                <div className="icons-container">
                    <div className="icon-directions">
                        <i className="material-icons">
                            directions_run
                        </i>
                    </div>
                </div>
                <p className="steps-title">Steps</p>
                <h2 className="steps-subtitle">{steps.toLocaleString()}</h2>
            </div>
            <div className="message">
                <p className="steps-title">Very good</p>
                <h2 className="steps-subtitle">Keep going!</h2>
            </div>
            <div className="information">
                <div className="info">
                    <p>km</p>
                    <h2>{calculateDistance()}</h2>
                </div>
                <div className="info">
                    <p>cal</p>
                    <h2>{Math.round(steps * 0.05)}</h2>
                </div>
                <div className="info">
                    <p>hours</p>
                    <h2>{calculateActivity()}</h2>
                </div>
            </div>
        </div>
    )
}

export default Steps;
