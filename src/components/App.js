import React, { useState, useEffect } from 'react';
import * as moment from "moment";

import Days from './Days';
import Card from './Card';
import Title from './Title';


function App() {
  const [visibility] = useState('hidden');
  const [totalSteps, setTotalSteps] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalActivity, setTotalActivity] = useState({});
  const [daySteps] = useState({
    monday: { steps: 0, date: [] },
    tuesday: { steps: 0, date: [] },
    wednesday: { steps: 0, date: [] },
    thursday: { steps: 0, date: [] },
    friday: { steps: 0, date: [] },
  });


  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSteps]);

  const loadData = async () => {
    try {
      const response = await fetch("https://run.mocky.io/v3/c236bc5c-ceba-4006-a901-9c9b94520242");
      const data = await response.json();

      data.forEach(element => {
        const time = element.timestamp;
        const now = moment(time).format("dddd MMMM Do YYYY");
        const formatedDate = now.toString().split(" ");
        const day = formatedDate[0].toLowerCase();

        daySteps[day].steps += element.steps;
        daySteps[day].date = formatedDate;
      });

      getTotalSteps(data);
      getTotalCalories();
      getTotalActivity();
    } catch (error) {
      console.log(error);
    }
  }

  const getTotalSteps = steps => {
    let sum = 0;
    steps.forEach(step => {
      sum += step.steps;
    });

    setTotalSteps(sum);
  };

  const getTotalCalories = () => {
    let calories = totalSteps * 0.05;
    setTotalCalories(Math.round(calories));
  };

  const getTotalActivity = () => {

    //get total minutes from activity
    let sumOfMinutes = Math.round((totalSteps * 0.5) / 60);

    //calculate total minutes from activity
    let averageMinutes = Math.round((sumOfMinutes / 5) % 60);
    //calculate total hours from activity
    let averageHour = Math.round(sumOfMinutes / 5 / 60);

    setTotalActivity({ averageMinutes, averageHour });

  };

  return (
    <div className="container">
      <Title
        visibility={visibility}
      />
      <Days daySteps={daySteps}
      />
      <Card
        icon="timer"
        title="Activity"
        subtitle="Averge"
        total={totalActivity}
      />
      <Card
        icon="directions_run"
        title="Steps"
        subtitle="Total"
        total={totalSteps}
      />
      <Card
        icon="whatshot"
        title="Calories"
        subtitle="Total Burned"
        total={totalCalories}
      />
    </div>
  );
}

export default App;
