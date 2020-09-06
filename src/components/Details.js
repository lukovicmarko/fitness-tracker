import React from 'react';
import Title from './Title';
import Days from './Days';
import Steps from './Steps';

function Details(props) {
    const { daySteps, day } = props.location.state;
    const { steps } = daySteps[day];
    const month = daySteps[day].date[1];
    const date = daySteps[day].date[2];
    const year = daySteps[day].date[3];
    const fullDate = month + ' ' + date + ', ' + year;


    const calculateDistance = () => {
        //distance
        const distance = ((steps * 0.762) / 1000);
        const formatedDistance = Math.round(distance * 10) / 10;

        return formatedDistance;
    }

    const calculateActivity = () => {
        //activity
        const sumOfMinutes = steps * 0.5 / 60;
        const averageMinutes = Math.round(sumOfMinutes % 60);
        const averageHour = Math.round((sumOfMinutes / 5) / 60);

        const totalActivity = averageMinutes + 'min'

        return totalActivity;
    }


    return (
        <div className="container">
            <Title
                title={day}
                subtitle={fullDate}
                className="title-details"
            />
            <Days daySteps={daySteps} />
            <Steps
                steps={steps}
                calculateDistance={calculateDistance}
                calculateActivity={calculateActivity}
            />
        </div>
    )
}


export default Details;


