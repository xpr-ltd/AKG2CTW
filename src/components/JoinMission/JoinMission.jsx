import React, { useState } from 'react';
import styles from './JoinMission.module.css';
import { BookOpen, Rocket, Cpu, Heart, CheckCircle2 } from 'lucide-react';
import useReveal from '../../hooks/useReveal';

export default function JoinMission() {
  const [ref, revealed] = useReveal(0.2);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const pillars = [
    {
      icon: <BookOpen size={30} />,
      title: 'Learn',
      desc: 'Encourage lifelong curiosity.'
    },
    {
      icon: <Rocket size={30} />,
      title: 'Imagine',
      desc: "Think beyond today's possibilities."
    },
    {
      icon: <Cpu size={30} />,
      title: 'Create',
      desc: 'Build meaningful solutions.'
    },
    {
      icon: <Heart size={30} />,
      title: 'Impact',
      desc: 'Use knowledge to improve lives.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(true);
      return;
    }

    setError(false);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section 
      id="mission" 
      ref={ref} 
      className={`${styles.missionSection} ${revealed ? styles.revealed : ''}`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Movement</span>
          <h2 className={styles.title}>Join the Mission</h2>
          <p className={styles.intro}>
            Every invention begins with curiosity. Every breakthrough begins with someone willing to imagine something better. 
            Together, we can inspire the next generation of thinkers, creators, and leaders.
          </p>
        </div>

        {/* Pillars Grid with connection line */}
        <div className={styles.pillarsContainer}>
          {/* Holographic Connecting Line SVG (Visible on Desktop) */}
          <svg className={styles.connectionLines} viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M125,50 L875,50" stroke="rgba(0, 200, 255, 0.2)" strokeWidth="2" strokeDasharray="5 5" />
            <path 
              className={styles.glowingPath} 
              d="M125,50 L875,50" 
              stroke="var(--color-hologram-cyan)" 
              strokeWidth="2" 
              strokeDasharray="150" 
              strokeDashoffset="150" 
            />
          </svg>

          <div className={styles.grid}>
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className={styles.card}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={styles.iconContainer}>
                  {pillar.icon}
                </div>
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Newsletter signup */}
        <div className={styles.communityBox}>
          <p className={styles.inviteText}>
            Whether you're a child, parent, teacher, school, library, or organization, there's a place for you in this journey.
          </p>

          <div className={styles.actions}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.subscribeForm}>
                <div className={styles.inputWrapper}>
                  <input 
                    type="email" 
                    placeholder="Enter your email to stay updated" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${styles.input} ${error ? styles.inputError : ''}`}
                    aria-label="Email address"
                  />
                  {error && <span className={styles.errorText}>Please enter a valid email address.</span>}
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Stay Updated
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <CheckCircle2 size={32} className={styles.successIcon} />
                <div>
                  <h4 className={styles.successTitle}>You're in!</h4>
                  <p className={styles.successText}>We'll keep you updated on exciting news and resources.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
