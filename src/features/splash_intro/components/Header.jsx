import React from 'react';
import styles from './Splash.module.css';

function Navigation() {
  return (
    <nav>
      <a href="#hero">LOGIN</a>
    </nav>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>UPASTHITI</h1>
      <Navigation />
    </header>
  );
}