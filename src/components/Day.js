import React from 'react';
import { NavLink } from 'react-router-dom';

function Day({ daySteps, day }) {
    const newDay = daySteps[day].date[0];
    const newDate = daySteps[day].date[2];
    return (
        <NavLink to={{
            pathname: `/details/${newDay}`,
            state: { daySteps, day }
        }}
            className="navItem"
            activeClassName="activeClassName"
        >
            {newDate ? newDate.slice(0, -2) : null} <br /> {newDay ? newDay.slice(0, 3) : null}
        </NavLink>
    );
};

export default Day;