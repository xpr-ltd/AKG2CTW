import React, { useState } from 'react';
import styles from './Footer.module.css';
import { Mail, Check } from 'lucide-react';
import useCountdown from '../../hooks/useCountdown';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { isLaunched } = useCountdown('2026-08-21T14:00:00+01:00');

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        
        {/* Top Grid */}
        <div className={styles.topGrid}>
          {/* Brand Info */}
          <div className={styles.brandInfo}>
            <div className={styles.logo} onClick={() => handleScrollTo('home')}>
              <span className={styles.logoGold}>A KID'S</span>{' '}GUIDE TO CHANGE THE W
              <span className={styles.globeWrapper}>
                <img src="/images/illustrations/globe-removebg.png" alt="O" className={styles.globeLogo} />
              </span>
              RLD
            </div>
            <p className={styles.tagline}>
              Empowering the next generation to imagine, build, and change the world with technology and purpose.
            </p>
            <div className={styles.socialLinks}>
              {/* Twitter / X SVG */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              {/* Instagram SVG */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="https://www.linkedin.com/in/ime-inyang-jr/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Explore</h4>
            <ul className={styles.linksList}>
              <li><button onClick={() => handleScrollTo('home')} className={styles.footerLink}>Home</button></li>
              <li><button onClick={() => handleScrollTo('about')} className={styles.footerLink}>About the Book</button></li>
              <li><button onClick={() => handleScrollTo('inside')} className={styles.footerLink}>Inside</button></li>
              <li><button onClick={() => handleScrollTo('author')} className={styles.footerLink}>Author</button></li>
              <li><button onClick={() => handleScrollTo('buy')} className={styles.footerLink}>{isLaunched ? "Buy Now" : "Pre-order Now"}</button></li>
            </ul>
          </div>

          {/* Privacy & Legal */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.linksList}>
              <li><a href="#privacy" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#terms" className={styles.footerLink}>Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter signup in footer */}
          <div className={styles.newsletterColumn}>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Get free educational resources and book updates directly in your inbox.</p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsletterInput}
                  required
                  aria-label="Footer Email address"
                />
                <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                  <Mail size={18} />
                </button>
              </form>
            ) : (
              <div className={styles.footerSuccess}>
                <Check size={16} /> Subscribed successfully!
              </div>
            )}
          </div>
        </div>

        {/* Divider line */}
        <hr className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} A KID'S GUIDE TO CHANGE THE WORLD. All rights reserved.
          </p>
          <div className={styles.publisherInfo}>
            <span>Published by</span>
            <img 
              src="/images/publisher/logo_main_2.png" 
              alt="Publisher Logo" 
              className={styles.publisherLogo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
