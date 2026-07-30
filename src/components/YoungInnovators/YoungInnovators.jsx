import React from 'react';
import styles from './YoungInnovators.module.css';
import useReveal from '../../hooks/useReveal';

export default function YoungInnovators() {
  const [ref, revealed] = useReveal(0.2);

  const innovators = [
    {
      role: 'Explorer',
      image: '/images/illustrations/child_explorer.jpg',
      quote: 'The universe is full of mysteries waiting to be solved by curious minds.',
      desc: 'Inspires curiosity and space science.'
    },
    {
      role: 'Inventor',
      image: '/images/illustrations/child_inventor.jpg',
      quote: "Every great invention in history started with a simple 'What if?'.",
      desc: 'Nurtures software & hardware creation.'
    },
    {
      role: 'Builder',
      image: '/images/illustrations/child_builder.jpg',
      quote: "We don't just learn about the future—we build it with our own hands.",
      desc: 'Promotes coding, engineering & math.'
    },
    {
      role: 'Creator',
      image: '/images/illustrations/child_creator.jpg',
      quote: 'Art and technology are two sides of the same magical coin.',
      desc: 'Integrates design & digital storytelling.'
    },
    {
      role: 'Leader',
      image: '/images/illustrations/child_leader.jpg',
      quote: 'Leading means helping everyone find their own unique way to shine.',
      desc: 'Fosters collaboration & global empathy.'
    }
  ];

  return (
    <section 
      id="innovators" 
      ref={ref} 
      className={`${styles.youngInnovators} ${revealed ? styles.revealed : ''}`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Emotional Heart</span>
          <h2 className={styles.title}>Meet the Young Innovators</h2>
          <p className={styles.intro}>
            The book features five inspiring children, each representing a crucial path of discovery. 
            Hover over each card to read their message for future innovators.
          </p>
        </div>

        <div className={styles.grid}>
          {innovators.map((child, idx) => (
            <div 
              key={idx} 
              className={styles.card}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={child.image} 
                  alt={`${child.role} Portrait`} 
                  className={styles.cardImage}
                />
                <div className={styles.imageOverlay}></div>
                
                {/* Interactive Quote overlay */}
                <div className={styles.quoteOverlay}>
                  <p className={styles.quoteText}>"{child.quote}"</p>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <h3 className={styles.roleTitle}>{child.role}</h3>
                <span className={styles.roleDesc}>{child.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
