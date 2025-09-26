import React from 'react';
import styles from './NoticeSection.module.css'; // Assuming you created this from notice-section.css

const NoticeSection = () => {
  const notices = [
    'Mid-term exams will start from 20th September.',
    'Project submission deadline is 18th September.',
    'Annual sports meet registration open till 25th September.',
  ];

  return (
    <div className={styles['notice-section']}>
      <h3>Notice</h3>
      <ul className={styles['notice-list']}>
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeSection;