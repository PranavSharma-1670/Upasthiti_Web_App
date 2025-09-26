import React, { useState, useEffect } from 'react';
import styles from './StudentCalendarPage.module.css';

const StudentCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

  useEffect(() => { generateCalendar(currentDate); }, [currentDate]);

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <>
      <header className={styles['page-header']}>
        <nav className={styles.breadcrumb}>
          <a href="/student/dashboard">Home</a>
          <span>›</span>
          <span>Calendar</span>
        </nav>
      </header>

      <section className={styles['calendar-section']}>
        <div className={styles['calendar-header']}>
          <div className={styles['calendar-title']}><h1>My Calendar</h1></div>
          <div className={styles['calendar-controls']}>
            <button className={styles['nav-btn']} onClick={() => navigateMonth(-1)}>❮</button>
            <button className={styles['nav-btn']} onClick={() => navigateMonth(1)}>❯</button>
          </div>
        </div>

        <div className={styles['calendar-container']}>
          <div className={styles['calendar-month-year']}>
            <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          </div>
          <div className={styles['calendar-grid']}>
            <div className={styles.weekday}>Sun</div>
            <div className={styles.weekday}>Mon</div>
            <div className={styles.weekday}>Tue</div>
            <div className={styles.weekday}>Wed</div>
            <div className={styles.weekday}>Thu</div>
            <div className={styles.weekday}>Fri</div>
            <div className={styles.weekday}>Sat</div>
            {calendarDays.map((day, index) => {
              const dayClasses = [
                styles['calendar-day'],
                !day.isCurrentMonth ? styles['other-month'] : '',
                day.isToday ? styles.today : ''
              ].join(' ');

              return (
                <div key={index} className={dayClasses.trim()}>
                  <div className={styles['date-number']}>{day.date.getDate()}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCalendarPage;