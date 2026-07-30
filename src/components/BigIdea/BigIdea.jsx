import React from 'react';
import styles from './BigIdea.module.css';
import useReveal from '../../hooks/useReveal';

export default function BigIdea() {
  const [ref, revealed] = useReveal(0.25);

  return (
    <section 
      id="about" 
      ref={ref} 
      className={`${styles.bigIdea} ${revealed ? styles.revealed : ''}`}
    >
      <div className={styles.radialGlow}></div>
      <div className={`${styles.container} container`}>
        <span className={styles.eyebrow}>The Big Idea</span>
        
        <h2 className={styles.statement}>
          Every invention, every movement, and every positive change in history began as an idea in someone's mind.
        </h2>
        
        <p className={styles.description}>
          This book encourages children to dream boldly, ask thoughtful questions, 
          embrace technology with purpose, and discover that even the biggest changes 
          in the world often begin with one curious mind.
        </p>

        {/* Decorative holographic line */}
        <div className={styles.hologramLine}></div>
      </div>
    </section>
  );
}
