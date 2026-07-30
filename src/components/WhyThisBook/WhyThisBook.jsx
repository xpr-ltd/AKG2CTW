import React from 'react';
import styles from './WhyThisBook.module.css';
import { Sparkles, Lightbulb, PenTool, Globe } from 'lucide-react';
import useReveal from '../../hooks/useReveal';

export default function WhyThisBook() {
  const [ref, revealed] = useReveal(0.2);

  const cards = [
    {
      icon: <Sparkles size={36} className={styles.icon} />,
      title: 'Dream Big',
      description: 'Inspire kids to dream without limits and believe they can shape the future of technology and human innovation.'
    },
    {
      icon: <Lightbulb size={36} className={styles.icon} />,
      title: 'Imagine Deeply',
      description: 'Nurture natural curiosity, encouraging children to ask the critical questions that lead to scientific breakthroughs.'
    },
    {
      icon: <PenTool size={36} className={styles.icon} />,
      title: 'Create Boldly',
      description: 'Transform passive consumers of technology into active creators, builders, and developers of new solutions.'
    },
    {
      icon: <Globe size={36} className={styles.icon} />,
      title: 'Change the World',
      description: 'Empower kids with leadership and social awareness to design innovations that make a positive global impact.'
    }
  ];

  return (
    <section 
      id="why-this-book" 
      ref={ref} 
      className={`${styles.whyThisBook} ${revealed ? styles.revealed : ''}`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Educational Value</span>
          <h2 className={styles.title}>Why This Book Matters</h2>
          <p className={styles.intro}>
            Designed for children aged 8–13, this book acts as a roadmap for the next generation of innovators. 
            It demystifies complex technology while placing empathy, creativity, and purpose at the heart of learning.
          </p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={styles.card}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={styles.iconContainer}>
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
              <div className={styles.accentLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
