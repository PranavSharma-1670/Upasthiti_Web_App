import React, { useState, useEffect } from 'react';
import styles from './StudentCalendarPage.module.css';

const StudentCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push({
        date: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString()
      });
      current.setDate(current.getDate() + 1);
    }
    setCalendarDays(days);
  };

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <>
      <header className={styles.pageHeader}>
        <nav className={styles.breadcrumb}>
          <a href="/student/dashboard">Home</a>
          <span>›</span>
          <span>Calendar</span>
        </nav>
      </header>

      <section className={styles.calendarSection}>
        <div className={styles.calendarHeader}>
          <div className={styles.calendarTitle}><h1>My Calendar</h1></div>
          <div className={styles.calendarControls}>
            <button className={styles.navBtn} onClick={() => navigateMonth(-1)}>❮</button>
            <button className={styles.navBtn} onClick={() => navigateMonth(1)}>❯</button>
          </div>
        </div>

        <div className={styles.calendarContainer}>
          <div className={styles.calendarMonthYear}>
            <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          </div>
          <div className={styles.calendarGrid}>
            <div className={styles.weekday}>Sun</div>
            <div className={styles.weekday}>Mon</div>
            <div className={styles.weekday}>Tue</div>
            <div className={styles.weekday}>Wed</div>
            <div className={styles.weekday}>Thu</div>
            <div className={styles.weekday}>Fri</div>
            <div className={styles.weekday}>Sat</div>
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`${styles.calendarDay} ${!day.isCurrentMonth ? styles.otherMonth : ''} ${day.isToday ? styles.today : ''}`}
              >
                <div className={styles.dateNumber}>{day.date.getDate()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCalendarPage;