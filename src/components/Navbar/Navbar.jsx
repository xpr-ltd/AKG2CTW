import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import useCountdown from '../../hooks/useCountdown';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { days, hours, minutes, seconds, isLaunched } = useCountdown('2026-08-21T11:00:00+01:00');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About the Book', id: 'about' },
    { label: 'Inside', id: 'inside' },
    { label: 'Author', id: 'author' },
    { label: isLaunched ? 'Buy' : 'Pre-order', id: 'buy' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer to update active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Offset for header height
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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo} onClick={() => handleNavClick('home')}>
          <span className={styles.logoGold}>A KID'S</span>{' '}GUIDE TO CHANGE THE W
          <span className={styles.globeWrapper}>
            <img src="/images/illustrations/globe-removebg.png" alt="O" className={styles.globeLogo} />
          </span>
          RLD
        </div>

        {!isLaunched && (
          <a href="#mission" className={styles.navbarTimer}>
            LAUNCHING IN {days}D : {hours}H : {minutes}M : {seconds}S
          </a>
        )}

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button 
          className={styles.hamburger} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.mobileNavItem}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.mobileActive : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
