import React, { useState, useEffect } from 'react';
// CORRECTED: Importing the CSS module
import styles from './MyCourses.module.css';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const sampleCourses = [
      { id: 1, title: 'Mathematics', instructor: 'Mahima', color: '#FF6B6B' },
      { id: 2, title: 'Physics', instructor: 'nidhi', color: '#4ECDC4' },
      { id: 3, title: 'Chemistry', instructor: 'shreya', color: '#45B7D1' }
    ];
    setCourses(sampleCourses);
  }, []);

  return (
    // CORRECTED: Using the 'styles' object for every className
    <div className={styles['my-courses']}>
      <div className={styles['my-courses-header']}>
        <h2>My Courses</h2>
        <a href="/courses" className={styles['view-all-link']}>View All</a>
      </div>
      <div className={styles['course-list']}>
        {courses.map(course => (
          <div key={course.id} className={styles['course-card']} style={{ borderLeft: `4px solid ${course.color}` }}>
            <div className={styles['course-info']}>
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;