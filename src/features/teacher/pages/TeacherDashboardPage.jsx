import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TeacherDashboardPage.module.css';

const TeacherDashboardPage = () => {
  const quickActions = [
    { title: 'Mark Attendance', description: 'Record student attendance', icon: 'fas fa-user-check', color: 'success', path: '/teacher/mark-attendance' },
    { title: 'Update Attendance', description: 'Modify existing records', icon: 'fas fa-edit', color: 'warning', path: '/teacher/update-attendance' },
    { title: 'Notice Board', description: 'Manage notices for students', icon: 'fas fa-bullhorn', color: 'info', path: '/teacher/notices' }
  ];

  const todayClasses = [
    { id: 1, subject: 'Mathematics', class: 'Class 10-A', time: '08:15 - 09:00', status: 'active' },
    { id: 2, subject: 'Mathematics', class: 'Class 9-B', time: '09:00 - 09:45', status: 'active' },
  ];

  return (
    <div className={styles.dashboard}>
      <header className={styles['dashboard-header']}>
        <div className={styles['header-left']}>
          <h1>Teacher Dashboard</h1>
          <p>Welcome back, Richa Sharma</p>
        </div>
      </header>

      <section className={styles['quick-actions']}>
        <h2>Quick Actions</h2>
        <div className={styles['action-cards']}>
          {quickActions.map((action, index) => (
            <Link key={index} to={action.path} className={`${styles['action-card']} ${styles[action.color]}`}>
              <div className={styles['action-icon']}> <i className={action.icon}></i> </div>
              <div className={styles['action-content']}>
                <h3>{action.title}</h3> <p>{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles['todays-classes']}>
        <h2>My Classes</h2>
        <div className={styles['classes-container']}>
          <div className={styles['classes-list']}>
            {todayClasses.map(classItem => (
              <div key={classItem.id} className={styles['class-item']}>
                <div className={styles['time-slot']}> <span className={styles['time-range']}>{classItem.time}</span> </div>
                <div className={styles['class-details']}>
                  <div className={`${styles['status-indicator']} ${styles[classItem.status]}`}></div>
                  <div className={styles['class-info']}>
                    <h4 className={styles['subject-name']}>{classItem.subject}</h4> <p className={styles['class-name']}>{classItem.class}</p>
                  </div>
                </div>
                <div className={styles['class-actions']}>
                  <Link to="/teacher/mark-attendance" className={`${styles.btn} ${styles['btn-sm']} ${styles['btn-primary']}`}>Mark Attendance</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboardPage;