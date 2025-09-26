import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './StudentSidebar.module.css';

const StudentSidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/student/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/student/calendar', icon: '📅', label: 'Calendar' },
    { path: '/student/teachers', icon: '👩‍🏫', label: 'Teachers' },
    { path: '/student/timetable', icon: '🗓️', label: 'Time Table' }
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles['logo-text']}>
          <span className={styles['logo-icon']}>📔</span>
          <span className={styles['logo-upas']}>UPAS</span>
          <span className={styles['logo-tithi']}>थिति</span>
        </span>
      </div>
      <ul className={styles['nav-links']}>
        {navItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? styles.active : ''}>
            <Link to={item.path}>
              <span className={styles.icon}>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StudentSidebar;