import React, { useState, useEffect } from 'react';
import styles from './StudentTeachersPage.module.css';

const StudentTeachersPage = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const sampleTeachers = [
      { id: 1, name: 'Mahima Chabbra', subject: 'Mathematics', email: 'mahima.chabbra@school.edu', phone: '+91 9328198133' },
      { id: 2, name: 'Nidhi Sharma', subject: 'Physics', email: 'nidhi.sharma@school.edu', phone: '+91 9328194134' },
      { id: 3, name: 'Vijay Kumar', subject: 'Chemistry', email: 'vijay.kumar@school.edu', phone: '+91 9326194135' },
      { id: 4, name: 'Sarah M', subject: 'English', email: 'sarah.m@school.edu', phone: '+91 9328598136' },
    ];
    setTeachers(sampleTeachers);
  }, []);

  return (
    <>
      <header className={styles['page-header']}>
        <nav className={styles.breadcrumb}>
          <a href="/student/dashboard">Home</a>
          <span>›</span>
          <span>Teachers</span>
        </nav>
      </header>

      <section className={styles['teachers-content']}>
        <div className={styles['teachers-header']}>
          <h1>Faculty Members</h1>
          <p>Get in touch with your teachers and faculty members</p>
        </div>

        <div className={styles['teachers-list']}>
          {teachers.map(teacher => (
            <div key={teacher.id} className={styles['teacher-bar']}>
              <div className={styles['teacher-details']}>
                <div className={styles['teacher-info-stack']}>
                  <div className={styles['teacher-name-row']}>
                    <h3 className={styles['teacher-name']}>{teacher.name}</h3>
                    <span className={styles['teacher-subject']}>{teacher.subject}</span>
                  </div>
                  <div className={styles['contact-item']}>
                    <span className={styles['contact-label']}>Email:</span>
                    <span className={styles['contact-value']}>{teacher.email}</span>
                  </div>
                  <div className={styles['contact-item']}>
                    <span className={styles['contact-label']}>Phone:</span>
                    <span className={styles['contact-value']}>{teacher.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StudentTeachersPage;