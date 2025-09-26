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
      <header className={styles.pageHeader}>
        <nav className={styles.breadcrumb}>
          <a href="/student/dashboard">Home</a>
          <span>›</span>
          <span>Teachers</span>
        </nav>
      </header>

      <section className={styles.teachersContent}>
        <div className={styles.teachersHeader}>
          <h1>Faculty Members</h1>
          <p>Get in touch with your teachers and faculty members</p>
        </div>

        <div className={styles.teachersList}>
          {teachers.map(teacher => (
            <div key={teacher.id} className={styles.teacherBar}>
              <div className={styles.teacherDetails}>
                <div className={styles.teacherInfoStack}>
                  <div className={styles.teacherNameRow}>
                    <h3 className={styles.teacherName}>{teacher.name}</h3>
                    <span className={styles.teacherSubject}>{teacher.subject}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email:</span>
                    <span className={styles.contactValue}>{teacher.email}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Phone:</span>
                    <span className={styles.contactValue}>{teacher.phone}</span>
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