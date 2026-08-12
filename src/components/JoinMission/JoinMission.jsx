import React from 'react';
import styles from './JoinMission.module.css';
import useReveal from '../../hooks/useReveal';
import useCountdown from '../../hooks/useCountdown';
import { Play } from 'lucide-react';

export default function JoinMission() {
  const [ref, revealed] = useReveal(0.2);
  const { days, hours, minutes, seconds, isLaunched } = useCountdown('2026-08-21T14:00:00+01:00');

  return (
    <section 
      id="launch" 
      ref={ref} 
      className={`${styles.missionSection} ${revealed ? styles.revealed : ''}`}
    >
      <div className={`${styles.container} container`}>
        <div className={styles.layoutGrid}>
          
          {/* Left Column - Details & Timer */}
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>Official Event</span>
            <h2 className={styles.title}>Book Launch Celebration</h2>
            <div className={styles.launchDateTime}>August 21, 2026 at 2:00 PM (GMT+1)</div>
            
            <p className={styles.intro}>
              Be a part of this historic moment! We invite kids, parents, teachers, and changemakers 
              around the world to participate in the official virtual book launch of 
              <strong> "A Kid's Guide to Change the World"</strong>. 
            </p>



            {/* Countdown / Status Box */}
            <div className={styles.timerContainer}>
              {!isLaunched ? (
                <>
                  <div className={styles.timerTitle}>LAUNCH COUNTDOWN</div>
                  <div className={styles.countdown}>
                    <div className={styles.timeBlock}>
                      <span className={styles.timeValue}>{String(days).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>DAYS</span>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div className={styles.timeBlock}>
                      <span className={styles.timeValue}>{String(hours).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>HOURS</span>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div className={styles.timeBlock}>
                      <span className={styles.timeValue}>{String(minutes).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>MINS</span>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div className={styles.timeBlock}>
                      <span className={styles.timeValue}>{String(seconds).padStart(2, '0')}</span>
                      <span className={styles.timeLabel}>SECS</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.liveNotice}>
                  🚀 WE ARE LIVE! JOIN THE CELEBRATION NOW
                </div>
              )}
            </div>

            <div className={styles.actionBlock}>
              <a 
                href="https://www.youtube.com/live/kIapz13D_XI?si=L9Fg9sY0ZmiGvE7s"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.watchBtn}
              >
                {isLaunched ? "Watch the Recording" : "Set Launch Reminder"}
              </a>
            </div>
          </div>

          {/* Right Column - Clickable Thumbnail Image */}
          <div className={styles.imageContent}>
            <a 
              href="https://www.youtube.com/live/kIapz13D_XI?si=L9Fg9sY0ZmiGvE7s"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thumbnailLink}
              aria-label="Watch the Book Launch on YouTube"
            >
              <div className={styles.thumbnailWrapper}>
                <img 
                  src="/images/illustrations/eLaunch_thumbnail.png" 
                  alt="Book Launch Livestream Thumbnail" 
                  className={styles.thumbnailImg}
                />
                <div className={styles.overlay}>
                  <div className={styles.playIconCircle}>
                    <Play size={32} fill="currentColor" />
                  </div>
                  <span className={styles.overlayText}>WATCH LIVESTREAM</span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
