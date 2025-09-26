import React from 'react';
import styles from './LoginModal.module.css'; // Updated import

export default function StudentLogin({ onClose }) {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <h3>Student Login</h3>
        <form>
          <input type="text" placeholder="Student ID" required />
          <input type="password" placeholder="Password" required />
          {/* Added the specific button class */}
          <button type="submit" className={styles['student-btn']}>
            Login
          </button>
        </form>
        <button className={styles['close-btn']} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}