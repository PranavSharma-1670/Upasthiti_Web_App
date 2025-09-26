import React, { useState, useEffect } from 'react';
import styles from './DashboardCalendar.module.css';

const DashboardCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    const generateCalendar = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - firstDay.getDay());
      
      const sampleAttendance = { '2025-09-04': 'absent', '2025-09-05': 'present' };
      const days = [];
      const current = new Date(startDate);
      
      for (let i = 0; i < 42; i++) {
        const dateKey = current.toISOString().split('T')[0];
        days.push({
          date: new Date(current),
          isCurrentMonth: current.getMonth() === month,
          isToday: current.toDateString() === new Date().toDateString(),
          attendance: sampleAttendance[dateKey] || null
        });
        current.setDate(current.getDate() + 1);
      }
      setCalendarDays(days);
    };
    generateCalendar(currentDate);
  }, [currentDate]);

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div className={styles['dashboard-calendar-widget']}>
      <div className={styles['dashboard-calendar-container']}>
        <div className={styles['dashboard-calendar-header']}>
          <button onClick={() => navigateMonth(-1)}>❮</button>
          <h3>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
          <button onClick={() => navigateMonth(1)}>❯</button>
        </div>
        <div className={styles['dashboard-calendar-grid']}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className={styles['dashboard-calendar-weekday']}>{day}</div>
          ))}
          {calendarDays.map((day, index) => {
            const dayClasses = [
              styles['dashboard-calendar-day'],
              day.isCurrentMonth ? '' : styles['other-month'],
              day.isToday ? styles.today : '',
              day.attendance ? styles[day.attendance] : ''
            ].join(' ');

            return (
              <div key={index} className={dayClasses.trim()} title={`${day.date.toDateString()}`}>
                {day.date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardCalendar;