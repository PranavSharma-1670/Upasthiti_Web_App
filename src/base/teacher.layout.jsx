import React from 'react';
import { Outlet } from 'react-router-dom';
import TeacherSidebar from '../features/teacher/components/layout/TeacherSidebar';
import RightPanel from '../features/teacher/components/layout/RightPanel';
import styles from './TeacherLayout.module.css';

const TeacherLayout = () => {
  return (
    <div className={styles.app}>
      <TeacherSidebar />
      <main className={styles.mainContent}>
        <Outlet /> {/* Teacher pages will render here */}
      </main>
      <RightPanel />
    </div>
  );
};

export default TeacherLayout;