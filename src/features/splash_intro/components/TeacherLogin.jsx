import React from 'react';
import styles from './LoginModal.module.css'; // Updated import

export default function TeacherLogin({ onClose }) {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <h3>Teacher Login</h3>
        <form>
          <input type="text" placeholder="Employee ID" required />
          <input type="password" placeholder="Password" required />
          {/* Added the specific button class */}
          <button type="submit" className={styles['teacher-btn']}>
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