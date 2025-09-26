import React, { useState } from 'react';
import styles from './RightPanel.module.css';

const RightPanel = () => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const generateCalendar = () => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    const days = [];
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevMonthDay = new Date(year, month, -firstDayOfWeek + i + 1);
      days.push(<div key={`prev-${i}`} className={`${styles['calendar-day']} ${styles['other-month']}`}>{prevMonthDay.getDate()}</div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const today = new Date();
      const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
      const isSelected = year === selectedDate.getFullYear() && month === selectedDate.getMonth() && day === selectedDate.getDate();
      
      const dayClasses = `${styles['calendar-day']} ${isToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`;
      
      days.push(<div key={day} className={dayClasses} onClick={() => setSelectedDate(new Date(year, month, day))}>{day}</div>);
    }
    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(calendarDate);
    newDate.setMonth(calendarDate.getMonth() + direction);
    setCalendarDate(newDate);
  };

  const getMonthYearString = () => {
    return calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <aside className={styles['right-panel']}>
      <section className={styles['profile-section']}>
        <div className={styles['profile-card']}>
          <div className={styles['account-badge']}>Teacher Account</div>
          <div className={styles['profile-info']}>
            <div className={styles['profile-avatar']}>
              <div className={styles['profile-icon']}><i className="fas fa-user-tie"></i></div>
            </div>
            <div className={styles['profile-details']}>
              <h4 className={styles['teacher-name']}>Richa Sharma</h4>
              <p className={styles['teacher-id']}>ID: T012191</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['calendar-section']}>
        <div className={styles['calendar-card']}>
          <div className={styles['calendar-header']}>
            <h4>{getMonthYearString()}</h4>
            <div className={styles['calendar-nav-buttons']}>
              <button className={styles['calendar-nav']} onClick={() => navigateMonth(-1)} title="Previous Month">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className={styles['calendar-nav']} onClick={() => navigateMonth(1)} title="Next Month">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className={styles['calendar-grid']}>
            <div className={styles['calendar-weekdays']}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className={styles.weekday}>{day}</div>)}
            </div>
            <div className={styles['calendar-days']}>{generateCalendar()}</div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightPanel;