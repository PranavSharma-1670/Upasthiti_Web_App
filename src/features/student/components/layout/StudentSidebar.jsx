import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './StudentSidebar.module.css';

const StudentSidebar = () => {
  const location = useLocation();
  
  // const navItems = [
  //   { path: '/', icon: '📊', label: 'Dashboard' },
  //   { path: '/calendar', icon: '📅', label: 'Calendar' },
  //   { path: '/teachers', icon: '👩‍🏫', label: 'Teachers' },
  //   { path: '/timetable', icon: '🗓️', label: 'Time Table' }
  // ];

  const navItems = [
    { path: '/student/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/student/calendar', icon: '📅', label: 'Calendar' },
    { path: '/student/teachers', icon: '👩‍🏫', label: 'Teachers' },
    { path: '/student/timetable', icon: '🗓️', label: 'Time Table' }
  ];

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.logoText}>
          <span className={styles.logoIcon}>📔</span>
          <span className={styles.logoUpas}>UPAS</span>
          <span className={styles.logoTithi}>थिति</span>
        </span>
      </div>
      <ul className={styles.navLinks}>
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

  // return (
  //   <nav className="sidebar">
  //     <div className="logo">
  //       <span className="logo-text">
  //         <span className="logo-icon">📔</span>
  //         <span className="logo-upas">UPAS</span>
  //         <span className="logo-tithi">थिति</span>
  //       </span>
  //     </div>
  //     <ul className="nav-links">
  //       {navItems.map((item) => (
  //         <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
  //           <Link to={item.path}>
  //             <span className="icon">{item.icon}</span>
  //             {item.label}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );
};

export default StudentSidebar;