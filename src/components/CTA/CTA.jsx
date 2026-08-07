import React from 'react';
import styles from './CTA.module.css';
import useReveal from '../../hooks/useReveal';
import useCountdown from '../../hooks/useCountdown';

export default function CTA({ onOpenSample }) {
  const [ref, revealed] = useReveal(0.2);
  const { isLaunched } = useCountdown('2026-08-21T11:00:00+01:00');

  return (
    <section 
      id="buy" 
      ref={ref} 
      className={`${styles.ctaSection} ${revealed ? styles.revealed : ''}`}
    >
      {/* Decorative background overlay */}
      <div className={styles.backgroundDecor}>
        <div className={styles.stars}></div>
        <div className={styles.projectionBeam}></div>
        <div className={styles.bottomGlow}></div>
      </div>

      <div className={`${styles.container} container`}>
        <h2 className={styles.headline}>
          The Future Doesn't Wait. <br />
          Let's Build It Together.
        </h2>
        
        <p className={styles.supportingText}>
          Start the journey today. Give a child the confidence to dream bigger, think deeper, 
          create boldly, and discover that changing the world begins with one curious idea.
        </p>

        <div className={styles.buttonGroup}>
          <a 
            href="https://selar.com/akidsguide" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.primaryBtn}
          >
            {isLaunched ? "Buy the Book" : "Pre-order the Book"}
          </a>
        </div>
      </div>
    </section>
  );
}
