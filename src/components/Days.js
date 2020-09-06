import React from 'react'
import Day from './Day';

function Days({ daySteps }) {
    return (
        <ul className="navigation">
            {
                Object.keys(daySteps).map((day, i) =>
                    <Day key={i} daySteps={daySteps} day={day} />
                )
            }
        </ul>
    )
}

export default Days;
