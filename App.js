import React, { useState } from 'react';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';
import ReminderLogic from './components/ReminderLogic';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [reminders, setReminders] = useState([]);
  const [stopAlarm, setStopAlarm] = useState(false); // State to control alarm sound

  const addReminder = (time) => {
    setReminders([...reminders, { time }]);
  };

  const handleStopAlarm = () => {
    setStopAlarm(true); // Set stopAlarm to true when Stop Alarm button is clicked
    setReminders([]); // Clear the reminders list
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Water Reminder App</h1>
        <ReminderForm addReminder={addReminder} />
        <ReminderList reminders={reminders} />
        <button className="stop-alarm" onClick={handleStopAlarm}>
          Clear Alarm
        </button>
        <ReminderLogic reminders={reminders} stopAlarm={stopAlarm} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;



