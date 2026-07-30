import React from 'react';
import styles from './SectionDivider.module.css';

export default function SectionDivider({ type = 'glow' }) {
  if (type === 'curve') {
    return (
      <div className={`${styles.divider} ${styles.curve}`}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64 C480,120 960,120 1440,64 L1440,120 L0,120 Z" fill="var(--color-primary-white)"/>
        </svg>
      </div>
    );
  }

  if (type === 'glow') {
    return (
      <div className={`${styles.divider} ${styles.glow}`}>
        <div className={styles.glowBeam}></div>
      </div>
    );
  }

  if (type === 'hologram') {
    return (
      <div className={`${styles.divider} ${styles.hologram}`}>
        <div className={styles.hologramLine}></div>
      </div>
    );
  }

  return <div className={`${styles.divider} ${styles.gradient}`} />;
}
