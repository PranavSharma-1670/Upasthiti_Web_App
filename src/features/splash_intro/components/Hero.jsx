import React from 'react';
import styles from './Splash.module.css';

export default function Hero({ onStudentClick, onTeacherClick }) {
  return (
    <section id="hero" className={styles.hero}>
      <h2>The Attendance Records</h2>
      <p>An easier way to keep track of your daily attendance</p>
      <div className={styles['button-container']}>
        <button className={styles.button} onClick={onStudentClick}>
          Student Login
        </button>
        <button className={styles.button} onClick={onTeacherClick}>
          Teacher Login
        </button>
      </div>
    </section>
  );
}