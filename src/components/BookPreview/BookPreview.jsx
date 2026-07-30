import React from 'react';
import styles from './BookPreview.module.css';
import { Check } from 'lucide-react';
import useReveal from '../../hooks/useReveal';

export default function BookPreview() {
  const [ref, revealed] = useReveal(0.2);

  const checklistItems = [
    'Innovation',
    'Artificial Intelligence',
    'Creativity',
    'Leadership',
    'Critical Thinking',
    'Problem Solving',
    'Engineering',
    'Future Careers',
    'Kindness',
    'Purpose'
  ];

  return (
    <section 
      id="inside" 
      ref={ref} 
      className={`${styles.bookPreview} ${revealed ? styles.revealed : ''}`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Inside the Pages</span>
          <h2 className={styles.title}>What's Inside the Book?</h2>
        </div>

        <div className={styles.content}>
          {/* Left: 3D Open Book Mockup */}
          <div className={styles.mockupContainer}>
            <div className={styles.book3d}>
              <div className={styles.bookSpine}></div>
              
              {/* Left Page */}
              <div className={`${styles.page} ${styles.leftPage}`}>
                <div className={styles.pageContent}>
                  <span className={styles.chapterNum}>Chapter 2</span>
                  <h4 className={styles.pageTitle}>The AI Revolution</h4>
                  <div className={styles.doodleSketch}>
                    <svg viewBox="0 0 100 60" fill="none" stroke="rgba(16,35,62,0.3)" strokeWidth="1.5">
                      <rect x="35" y="12" width="30" height="25" rx="5" />
                      <circle cx="45" cy="22" r="3" fill="var(--color-primary-navy)" />
                      <circle cx="55" cy="22" r="3" fill="var(--color-primary-navy)" />
                      <line x1="30" y1="24" x2="35" y2="24" />
                      <line x1="65" y1="24" x2="70" y2="24" />
                      <line x1="50" y1="7" x2="50" y2="12" />
                      <circle cx="50" cy="5" r="2.5" fill="var(--color-primary-red)" />
                      <path d="M45,30 Q50,34 55,30" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className={styles.pageText}>
                    "Algorithms are just instructions. You have the power to direct them to do good things..."
                  </p>
                </div>
              </div>

              {/* Right Page */}
              <div className={`${styles.page} ${styles.rightPage}`}>
                <div className={styles.pageContent}>
                  <span className={styles.chapterNum}>Chapter 5</span>
                  <h4 className={styles.pageTitle}>Build the Globe</h4>
                  <div className={styles.pageHologram}>
                    <div className={styles.miniGlobe}></div>
                    <div className={styles.hologramBeam}></div>
                  </div>
                  <p className={styles.pageText}>
                    "Every community challenge is an opportunity to design a solution that helps people."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Checklist */}
          <div className={styles.checklistColumn}>
            <p className={styles.checklistIntro}>
              Each chapter combines engaging narratives, real-world examples, and creative prompts 
              to cultivate crucial skills and mindsets:
            </p>
            <ul className={styles.checklist}>
              {checklistItems.map((item, idx) => (
                <li 
                  key={idx} 
                  className={styles.checkItem}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className={styles.checkIcon}>
                    <Check size={18} />
                  </div>
                  <span className={styles.checkText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
