import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from '../features/student/components/layout/StudentSidebar';
import styles from './StudentLayout.module.css'; // We'll create this file

const StudentLayout = () => {
  return (
    <div className={styles.dashboardContainer}>
      <StudentSidebar />
      <main className={styles.mainContent}>
        <Outlet /> {/* Child routes will render here */}
      </main>
    </div>
  );
};

export default StudentLayout;