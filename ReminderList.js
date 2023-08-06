import React from 'react';

const ReminderList = ({ reminders }) => {
  return (
    <div className="reminder-list">
      <h2>Reminders</h2>
      
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder.time}</li>
        ))}
    
    </div>
  );
};

export default ReminderList;




