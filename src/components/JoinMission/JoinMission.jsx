import React, { useState } from 'react';
import styles from './JoinMission.module.css';
import useReveal from '../../hooks/useReveal';
import useCountdown from '../../hooks/useCountdown';
import { Play, X, Copy, Check, MessageCircle, Send, Mail } from 'lucide-react';

export default function JoinMission() {
  const [ref, revealed] = useReveal(0.2);
  const { isLaunched } = useCountdown('2026-08-21T14:00:00+01:00');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const inviteMessage = `Hi! 👋

I'd love for you to join me for the A Kid's Guide to Change the World | eBook Launch.

📅 Friday, 21 August 2026
🕑 2:00 PM WAT
📺 YouTube Live

Set a reminder and join us here:
https://akidsguide.vercel.app/#launch

Hope to see you there! 🌍📖`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // URL-encoded strings for share channels
  const encodedMessage = encodeURIComponent(inviteMessage);
  const encodedSubject = encodeURIComponent("eBook Launch Invitation");

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

            <div className={styles.actionGroup}>
              <div className={styles.actionBlock}>
                <a 
                  href={isLaunched ? "https://www.youtube.com/live/kIapz13D_XI?si=L9Fg9sY0ZmiGvE7s" : "https://luma.com/piwe9fik"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.watchBtn}
                >
                  {isLaunched ? "Watch the Recording" : "Register to Attend"}
                </a>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={styles.inviteBtn}
                  aria-label="Invite a friend"
                >
                  Invite a Friend
                </button>
              </div>
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

      {/* Share Modal Dialog Overlay */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeBtn} 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <h3 className={styles.modalTitle}>Invite a Friend</h3>
            <p className={styles.modalSub}>Preview the invitation message below to copy or share directly.</p>

            {/* Message Preview Box */}
            <div className={styles.messageBox}>
              <pre className={styles.messagePreview}>{inviteMessage}</pre>
            </div>

            {/* Modal Actions */}
            <div className={styles.modalActions}>
              <button 
                onClick={handleCopy} 
                className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
              >
                {copied ? (
                  <>
                    <Check size={18} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Invitation
                  </>
                )}
              </button>
            </div>

            {/* Share Channels Section */}
            <div className={styles.shareChannels}>
              <span className={styles.shareLabel}>Share invitation via:</span>
              <div className={styles.channelsGrid}>
                {/* WhatsApp */}
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.channelLink} ${styles.whatsapp}`}
                  title="Share on WhatsApp"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  <span>WhatsApp</span>
                </a>

                {/* Telegram */}
                <a 
                  href={`https://t.me/share/url?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.channelLink} ${styles.telegram}`}
                  title="Share on Telegram"
                >
                  <Send size={20} fill="currentColor" />
                  <span>Telegram</span>
                </a>

                {/* Twitter / X */}
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.channelLink} ${styles.twitterX}`}
                  title="Share on X"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X / Twitter</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://akidsguide.vercel.app/#launch')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.channelLink} ${styles.linkedin}`}
                  title="Share on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:?subject=${encodedSubject}&body=${encodedMessage}`}
                  className={`${styles.channelLink} ${styles.email}`}
                  title="Send via Email"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
