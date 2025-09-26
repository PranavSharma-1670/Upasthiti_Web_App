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
      <header className={styles.pageHeader}>
        <nav className={styles.breadcrumb}>
          <a href="/student/dashboard">Home</a>
          <span>›</span>
          <span>Time Table</span>
        </nav>
      </header>

      <section className={styles.timetableContent}>
        <div className={styles.timetableHeader}><h1>TIME TABLE</h1></div>
        <div className={styles.timetableContainer}>
          <div className={styles.timetableGrid}>
            <div className={styles.timeHeader}></div>
            {timeSlots.map((time, index) => (
              <div key={index} className={styles.timeSlot}>{time}</div>
            ))}
            {Object.entries(schedule).map(([day, subjects]) => (
              <React.Fragment key={day}>
                <div className={styles.dayLabel}>{day}</div>
                {subjects.map((subject, index) => (
                  <div key={index} className={subject ? styles.subjectCard : styles.emptySlot}>
                    {subject && <div className={styles.subjectCode}>{subject}</div>}
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