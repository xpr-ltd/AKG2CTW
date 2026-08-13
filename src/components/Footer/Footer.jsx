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
              <a href="https://x.com/alfiinyang" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (formerly Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook SVG */}
              <a href="https://facebook.com/iinyangjr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
