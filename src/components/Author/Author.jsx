import React from 'react';
import styles from './Author.module.css';
import useReveal from '../../hooks/useReveal';

export default function Author() {
  const [ref, revealed] = useReveal(0.2);

  const timelineItems = [
    { stage: 'Engineering', desc: 'Academic foundations in software development and engineering systems.' },
    { stage: 'Technology', desc: 'Building complex platforms and leading product teams for tech firms.' },
    { stage: 'AI', desc: 'Designing artificial intelligence solutions and cognitive algorithms.' },
    { stage: 'Education', desc: 'Conducting STEM workshops and coding seminars for students.' },
    { stage: 'Author', desc: "Publishing books to empower kids with digital and global leadership." }
  ];

  return (
    <section 
      id="author" 
      ref={ref} 
      className={`${styles.authorSection} ${revealed ? styles.revealed : ''}`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Behind the Book</span>
          <h2 className={styles.title}>Meet the Author</h2>
        </div>

        <div className={styles.content}>
          {/* Left Column: Bio & Timeline */}
          <div className={styles.leftCol}>
            <div className={styles.bioWrapper}>
              <h3 className={styles.authorName}>Ime Inyang</h3>
              <p className={styles.mission}>
                "My mission is to help children discover that technology is a creative canvas, and their curiosity is the ultimate paintbrush to improve the world."
              </p>
              <p className={styles.biography}>
                Ime Inyang is a distinguished engineering leader, AI developer, and educator. 
                With years of industry experience, he has developed a unique philosophy: that the most powerful technology is only as good as the purpose behind it. He wrote this book to make complex innovation principles intuitive, exciting, and accessible to children globally.
              </p>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              <h4 className={styles.timelineTitle}>Journey of Innovation</h4>
              <div className={styles.timelineTrack}>
                {timelineItems.map((item, idx) => (
                  <div key={idx} className={styles.timelineItem}>
                    <div className={styles.timelinePoint}></div>
                    <div className={styles.timelineContent}>
                      <h5 className={styles.timelineStage}>{item.stage}</h5>
                      <p className={styles.timelineDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Author Portrait */}
          <div className={styles.rightCol}>
            <div className={styles.portraitWrapper}>
              <img 
                src="/images/author/headshot_ime.jpg" 
                alt="Ime Inyang - Author Portrait" 
                className={styles.portrait}
              />
              <div className={styles.photoFrame}></div>
              <div className={styles.photoGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
