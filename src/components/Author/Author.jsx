import React, { useState, useEffect } from 'react';
import styles from './Author.module.css';
import useReveal from '../../hooks/useReveal';

export default function Author() {
  const [ref, revealed] = useReveal(0.2);
  const [activeState, setActiveState] = useState(0);

  // Loop timing: 10 seconds for each state
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveState((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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
          <div className={styles.titleGridStack}>
            <h2 className={`${styles.title} ${styles.titleChild} ${activeState === 0 ? styles.titleVisible : ''}`}>
              Meet the Author
            </h2>
            <h2 className={`${styles.title} ${styles.titleChild} ${activeState === 1 ? styles.titleVisible : ''}`}>
              Meet The Inspiration
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          {/* Left Column: Bio & Timeline */}
          <div className={styles.leftCol}>
            
            <div className={styles.bioGridStack}>
              {/* State 0: Meet the Author Bio */}
              <div className={`${styles.bioChild} ${activeState === 0 ? styles.bioVisible : ''}`}>
                <h3 className={styles.authorName}>Ime Inyang</h3>
                <p className={styles.mission}>
                  "The future doesn't change because a few people have brilliant ideas—it changes because ordinary people choose to imagine, create, and act. I believe every child has the potential to become one of those people."
                </p>
                <p className={styles.biography}>
                  Ime Inyang is an AI leader, engineering professional, educator, and founder dedicated to advancing innovation through artificial intelligence and leveraging technology to build the future we desire. Through this book, he invites children to dream boldly, think creatively, and discover that they can turn their ideas into solutions that make a difference.
                </p>
              </div>

              {/* State 1: The Inspiration Bio */}
              <div className={`${styles.bioChild} ${activeState === 1 ? styles.bioVisible : ''}`}>
                <h3 className={styles.authorName}>The Young Learners</h3>
                <p className={styles.mission}>
                  “Who do you want to be?”
                </p>
                <p className={styles.biography}>
                  At a KIR Foundation Meet the Mentor session, Ime shared his “Exciting Tech Journey” with the young learners. Their questions sparked deeper reflection—and laid the groundwork for A Kid’s Guide to Change the World.
                </p>
              </div>
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
              <div className={styles.portraitGridStack}>
                <img
                  src="/images/author/headshot_ime.jpg?v=2"
                  alt="Ime Inyang - Author Portrait"
                  className={`${styles.portraitChild} ${activeState === 0 ? styles.portraitVisible : ''}`}
                />
                <img
                  src="/images/author/group_shot4x3.jpeg"
                  alt="The Inspiration - KIR Foundation Session"
                  className={`${styles.portraitChild} ${activeState === 1 ? styles.portraitVisible : ''}`}
                />
              </div>
              <div className={styles.photoFrame}></div>
              <div className={styles.photoGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
