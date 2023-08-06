import React, { useState } from 'react';

const ReminderForm = ({ addReminder }) => {
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reminderTime.trim() !== '') {
      addReminder(reminderTime);
      setReminderTime('');
    }
  };

  return (
    <div className="reminder-form">
      <form onSubmit={handleSubmit}>
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
        />
        <button type="submit">Set Alarm</button>
      </form>
    </div>
  );
};

export default ReminderForm;



