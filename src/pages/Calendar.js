import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

const CalendarPage = ({ tasks }) => {
  const [date, setDate] = useState(new Date());

  // Function to check if a task exists on a specific date
  // (We will add date logic to tasks in the next step!)
  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h1>Study Schedule</h1>
      <div className="calendar-layout">
        <div className="calendar-box">
          <Calendar onChange={onChange} value={date} />
        </div>
        
        <div className="day-details">
          <h3>Tasks for {date.toDateString()}</h3>
          <p>Upcoming deadlines will appear here once we link dates to your tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;