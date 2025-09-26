import React from 'react';
import StudentHeader from '../components/layout/StudentHeader';
import MyCourses from '../components/dashboard/MyCourses';
import DashboardCalendar from '../components/dashboard/DashboardCalendar';
import NoticeSection from '../components/dashboard/NoticeSection';
import styles from './StudentDashboardPage.module.css';

const StudentDashboardPage = () => {
  return (
    <>
      {/* The StudentHeader component also needs to be fixed, which we'll do next */}
      <StudentHeader />
      
      {/* CORRECTED: Using bracket notation for class names with hyphens */}
      <section className={styles['dashboard-content']}>
        <div className={styles['main-content-area']}>
          <MyCourses />
        </div>
        <div className={styles['side-content']}>
          <DashboardCalendar />
          <NoticeSection />
        </div>
      </section>
    </>
  );
};

export default StudentDashboardPage;