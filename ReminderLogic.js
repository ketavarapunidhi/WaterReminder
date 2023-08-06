import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReminderLogic = ({ reminders, stopAlarm }) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioElement = new Audio('/alarm.wav');
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    reminders.forEach((reminder) => {
      const [hour, minute] = reminder.time.split(':');
      const now = new Date();
      const reminderTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute
      );

      if (reminderTime > now) {
        const timeUntilReminder = reminderTime - now;
        setTimeout(() => {
          if (!stopAlarm) {
            toast.info(`Time to drink water!`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
              onClose: () => {
                if (audio && stopAlarm) {
                  audio.pause();
                  audio.currentTime = 0;
                }
              },
            });

            if (audio && !stopAlarm) {
              audio.play();
            }
          }
        }, timeUntilReminder);
      }
    });
  }, [reminders, stopAlarm, audio]);

  return <></>;
};

export default ReminderLogic;



