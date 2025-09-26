import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './TeacherSidebar.module.css';

const TeacherSidebar = () => {
  const location = useLocation();

  const navigationItems = [
    {
      section: 'Home',
      items: [
        { path: '/teacher/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' }
      ]
    },
    {
      section: 'Attendance',
      items: [
        { path: '/teacher/mark-attendance', icon: 'fas fa-user-check', label: 'Mark Attendance' },
        { path: '/teacher/update-attendance', icon: 'fas fa-edit', label: 'Update Attendance' }
      ]
    },
    {
      section: 'Communication',
      items: [
        { path: '/teacher/notices', icon: 'fas fa-bullhorn', label: 'Notices' },
        { path: '/teacher/compose-notice', icon: 'fas fa-pen', label: 'Compose Notice' }
      ]
    }
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <div className={styles.logo}>
          <div className={styles['logo-icon']}>
            <i className="fas fa-book book-icon"></i>
          </div>
          <div className={styles['logo-text']}>
            <span className={styles.english}>UPAS</span>
            <span className={styles.hindi}>थिति</span>
          </div>
        </div>
      </div>

      <nav className={styles['sidebar-nav']}>
        {navigationItems.map((section, index) => (
          <div key={index} className={styles['nav-section']}>
            <h3 className={styles['section-title']}>{section.section}</h3>
            <ul className={styles['nav-list']}>
              {section.items.map((item) => (
                <li key={item.path} className={styles['nav-item']}>
                  <Link 
                    to={item.path} 
                    className={`${styles['nav-link']} ${location.pathname === item.path ? styles.active : ''}`}
                  >
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default TeacherSidebar;