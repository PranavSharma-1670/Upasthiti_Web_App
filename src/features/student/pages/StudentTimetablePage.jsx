import React from 'react';
import styles from './StudentTimetablePage.module.css';

const StudentTimetablePage = () => {
  const timeSlots = ['8:00-8:50', '8:50-9:40', '9:40-10:30', '10:30-11:20', '11:20-12:10', '12:10-13:00'];
  const schedule = {
    Monday: ['English', 'Hindi', 'Science', 'IT', 'Science', 'Maths'],
    Tuesday: ['English', 'Science', 'Maths', 'Science', 'SST', ''],
    Wednesday: ['Maths', 'Science', 'IT', 'English', 'Hindi', ''],
    Thursday: ['PT', 'Maths', 'Science', 'Hindi', 'English', ''],
    Friday: ['Science', 'English', 'Hindi', 'Maths', 'IT', ''],
    Saturday: ['', '', '', '', '', ''],
  };

  return (
    <>
      <header className={styles['page-header']}>
        <nav className={styles.breadcrumb}>
          <a href="/student/dashboard">Home</a>
          <span>›</span>
          <span>Time Table</span>
        </nav>
      </header>

      <section className={styles['timetable-content']}>
        <div className={styles['timetable-header']}><h1>TIME TABLE</h1></div>
        <div className={styles['timetable-container']}>
          <div className={styles['timetable-grid']}>
            <div className={styles['time-header']}></div>
            {timeSlots.map((time, index) => (
              <div key={index} className={styles['time-slot']}>{time}</div>
            ))}
            {Object.entries(schedule).map(([day, subjects]) => (
              <React.Fragment key={day}>
                <div className={styles['day-label']}>{day}</div>
                {subjects.map((subject, index) => (
                  <div key={index} className={subject ? styles['subject-card'] : styles['empty-slot']}>
                    {subject && <div className={styles['subject-code']}>{subject}</div>}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentTimetablePage;