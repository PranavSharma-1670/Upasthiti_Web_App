import React, { useState, useRef, useEffect } from 'react';
import styles from './StudentHeader.module.css'; // Step 1: Import the module

const StudentHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      icon: '📢',
      title: 'Mid-term Exam Schedule',
      content: 'Mid-term exams will start from 20th September. Check your timetable for detailed schedule.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      icon: '📄',
      title: 'Project Submission Reminder',
      content: 'All project submissions are due by 18th September. Late submissions will not be accepted.',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Sports Meet Registration',
      content: 'Annual sports meet registration is now open. Register before 25th September.',
      time: '1 day ago',
      unread: false
    },
    {
      id: 4,
      icon: '📚',
      title: 'Library Maintenance',
      content: 'Library will be closed on 15th September for maintenance work.',
      time: '2 days ago',
      unread: false
    }
  ];
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    // Step 2: Apply the styles object to every className
    <header className={styles['dashboard-header']}>
      <div className={styles['header-left']}></div>
      <div className={styles['header-actions']}>
        <div className={styles['notification-container']} ref={notificationRef}>
          <button className={styles['notification-bell']} onClick={() => setShowNotifications(!showNotifications)}>
            🔔
            {unreadCount > 0 && <span className={styles['notification-badge']}>{unreadCount}</span>}
          </button>
          {showNotifications && (
            <div className={styles['notification-popup']}>
              <div className={styles['notification-header']}><h4>Circulars & Notifications</h4></div>
              <div className={styles['notification-list']}>
                {notifications.map((n) => (
                  <div key={n.id} className={`${styles['notification-item']} ${n.unread ? styles.unread : ''}`}>
                    <div className={styles['notification-icon']}>{n.icon}</div>
                    <div className={styles['notification-content']}>
                      <h5>{n.title}</h5><p>{n.content}</p><span className={styles['notification-time']}>{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={styles['profile-section']}>
          <img src="/avatar.jpg" alt="Profile" className={styles['profile-pic']} />
          <div className={styles['profile-info']}>
            <span className={styles['profile-name']}>Kabir Mehra</span>
            <span className={styles['verified-badge']}>✓</span>
            <span className={styles['profile-designation']}>A021191</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;