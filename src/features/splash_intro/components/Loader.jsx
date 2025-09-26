import React from 'react';
import styles from './Loader.module.css';

export default function Loader({ fadeOut }) {
  return (
    <div className={`${styles['loader-container']} ${fadeOut ? styles['fade-out'] : ''}`}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
}