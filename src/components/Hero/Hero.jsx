import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { ArrowDown } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

export default function Hero({ onOpenSample }) {
  const shouldReduceMotion = useReducedMotion();
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setAnimationStep(7);
      return;
    }

    const timers = [
      setTimeout(() => setAnimationStep(1), 300),  // Background softly brightens
      setTimeout(() => setAnimationStep(2), 600),  // Holographic glow under the book
      setTimeout(() => setAnimationStep(3), 900),  // Narrow beam of light projects upward
      setTimeout(() => setAnimationStep(4), 1200), // Tiny particles travel upward
      setTimeout(() => setAnimationStep(5), 1500), // Title appears as outline
      setTimeout(() => setAnimationStep(6), 1800), // Title fills with signature red
      setTimeout(() => setAnimationStep(7), 2200), // Beam fades, cyan edge-light remains
    ];

    return () => timers.forEach(clearTimeout);
  }, [shouldReduceMotion]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const doodles = [
    // Rocket
    <svg key="rocket" className={`${styles.doodle} ${styles.rocket}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18.5 4.5c1.5-1.5 1-3.5 1-3.5s-2-.5-3.5 1z" /><path d="M12 9l-4 4" /><path d="M9 15l-3 3" /><path d="M15 6l-3 3" /></svg>,
    // Planet
    <svg key="planet" className={`${styles.doodle} ${styles.planet}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="6" /><path d="M2.079 16.273a11.96 11.96 0 010-8.546M21.921 7.727a11.96 11.96 0 010 8.546" /><path d="M3 12h18" /></svg>,
    // Atom
    <svg key="atom" className={`${styles.doodle} ${styles.atom}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(45 12 12)" /><ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-45 12 12)" /><circle cx="12" cy="12" r="1.5" /></svg>,
    // Lightbulb
    <svg key="lightbulb" className={`${styles.doodle} ${styles.lightbulb}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>,
    // Gear
    <svg key="gear" className={`${styles.doodle} ${styles.gear}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
  ];

  return (
    <section id="home" className={`${styles.hero} ${animationStep >= 1 ? styles.bgBright : ''}`}>
      {/* Drifting Background Elements */}
      <div className={styles.backgroundOverlay}>
        {doodles.map((doodle, idx) => (
          <div key={idx} className={`${styles.doodleWrapper} ${styles[`doodleWrapper${idx + 1}`]}`}>
            {doodle}
          </div>
        ))}
        {/* Animated particles */}
        {animationStep >= 4 && (
          <div className={styles.particlesContainer}>
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className={styles.particle} 
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className={`${styles.container} container`}>
        {/* Left Column - Text content */}
        <div className={`${styles.textContent} ${animationStep >= 5 ? styles.textFadeIn : ''}`}>
          <h1 className={`${styles.headline} ${animationStep >= 5 ? styles.outlineVisible : ''} ${animationStep >= 6 ? styles.fillRed : ''}`}>
            Every Big Change <br />
            Begins With One <br />
            <span className={styles.highlightText}>Curious Kid.</span>
          </h1>

          <p className={styles.subheading}>
            Step inside a world where imagination meets technology. 
            A groundbreaking guide designed to inspire young minds to think boldly, 
            invent creatively, and build a brighter future.
          </p>

          <div className={styles.buttonGroup}>
            <a 
              href="https://selar.com/akidsguide" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primaryBtn}
            >
              Get the Book
            </a>
            <button 
              onClick={onOpenSample}
              className={styles.secondaryBtn}
            >
              Read Sample
            </button>
          </div>
        </div>

        {/* Right Column - Book Cover */}
        <div className={styles.bookContent}>
          <div className={styles.bookContainer}>
            {/* Projector Base */}
            <div className={`${styles.projector} ${animationStep >= 2 ? styles.projectorActive : ''}`}>
              <div className={styles.projectorBase}></div>
              <div className={styles.projectorLens}></div>
              {animationStep >= 3 && animationStep < 7 && (
                <div className={styles.lightBeam}></div>
              )}
            </div>

            {/* Glowing Backdrop */}
            <div className={`${styles.hologramGlow} ${animationStep >= 2 ? styles.glowActive : ''}`}></div>

            {/* Book Image */}
            <div className={`${styles.bookWrapper} ${animationStep >= 7 ? styles.bookFloating : ''}`}>
              <img 
                src="/images/book/E-copy_front.png" 
                alt="A Kid's Guide to Change the World Book Cover" 
                className={styles.bookCover}
              />
              <div className={`${styles.hologramRim} ${animationStep >= 7 ? styles.rimActive : ''}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <button 
        className={styles.scrollIndicator} 
        onClick={handleScrollDown}
        aria-label="Scroll down to About the Book"
      >
        <span className={styles.scrollText}>Explore More</span>
        <ArrowDown size={20} className={styles.scrollArrow} />
      </button>
    </section>
  );
}
