import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/images/Vector.png"
          alt="ValtechLogo"
          width={100}
          height={100}
        />
      </div>
    </header>
  );
}
