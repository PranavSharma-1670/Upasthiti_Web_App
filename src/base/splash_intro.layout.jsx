import React, { useState, useEffect } from 'react';
import Header from '../features/splash_intro/components/Header';
import Hero from '../features/splash_intro/components/Hero';
import Footer from '../features/splash_intro/components/Footer';
import Loader from '../features/splash_intro/components/Loader';
import StudentLogin from '../features/splash_intro/components/StudentLogin';
import TeacherLogin from '../features/splash_intro/components/TeacherLogin';
import styles from '../features/splash_intro/components/Splash.module.css';

export default function SplashIntroLayout() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
      setPageVisible(true);
    }, 1000);

    const timer2 = setTimeout(() => setLoading(false), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      {pageVisible && (
        <div className={`${styles.app} ${styles['fade-in']}`}>
          <Header />
          <Hero
            onStudentClick={() => setOpenModal('student')}
            onTeacherClick={() => setOpenModal('teacher')}
          />
          <Footer />
        </div>
      )}

      {loading && <Loader fadeOut={fadeOut} />}

      {openModal === 'student' && <StudentLogin onClose={() => setOpenModal(null)} />}
      {openModal === 'teacher' && <TeacherLogin onClose={() => setOpenModal(null)} />}
    </div>
  );
}