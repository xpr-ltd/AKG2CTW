import React, { useState } from 'react';
import styles from './SampleModal.module.css';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function SampleModal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const samplePages = [
    {
      title: "Chapter 1: The Spark of Curiosity",
      subtitle: "Where Innovation Begins",
      content: (
        <>
          <p>Have you ever looked at a lightbulb and wondered how electricity makes it glow? Or watched a bird fly and thought, <em>"Could I build a machine that does that?"</em></p>
          <p>Every great innovation in history began as a simple question in someone's mind. That is what curiosity is: the spark that lights up ideas.</p>
          <p>Curiosity is like a superpower. It allows you to see things not just as they are, but as they could be. In this chapter, we will discover how curiosity leads to invention, and how some of the most famous innovators in history started their journeys as curious kids just like you.</p>
        </>
      )
    },
    {
      title: "Chapter 2: Talking to Machines",
      subtitle: "The Language of Computers",
      content: (
        <>
          <p>Computers are incredibly smart, right? Well, actually, they are only as smart as the instructions we give them. In fact, a computer is like a very fast assistant who follows directions exactly, but doesn't know what to do until you write them down.</p>
          <p>Writing instructions for computers is called <strong>programming</strong>, or coding. It is like teaching a computer to speak your language. When you code, you are giving structure to your imagination.</p>
          <p>Today, with tools like Artificial Intelligence (AI), we can talk to machines in natural ways, but the core power remains with you: the creator who decides what the machine should build.</p>
        </>
      )
    },
    {
      title: "Chapter 3: Designing for People",
      subtitle: "Empathy-Driven Solutions",
      content: (
        <>
          <p>The best inventions in the world do not just use cool technology. They solve real problems for real people. This is what we call <strong>design thinking</strong>.</p>
          <p>Design begins with <strong>empathy</strong>. Empathy means putting yourself in someone else's shoes. If you can understand what makes someone's life difficult, you can invent a solution to make it easier.</p>
          <p>In this chapter, we will learn how young builders around the world designed water filters, smart safety backpacks, and translation apps simply by observing the challenges faced by their families and neighbors.</p>
        </>
      )
    }
  ];

  const handleNext = () => {
    if (currentPage < samplePages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.bookBadge}>Book Preview</div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close preview">
            <X size={24} />
          </button>
        </div>

        {/* Page Content */}
        <div className={styles.pageContainer}>
          <h3 id="modal-title" className={styles.pageTitle}>{samplePages[currentPage].title}</h3>
          <span className={styles.pageSubtitle}>{samplePages[currentPage].subtitle}</span>
          <hr className={styles.titleDivider} />
          <div className={styles.pageBody}>
            {samplePages[currentPage].content}
          </div>
        </div>

        {/* Footer controls */}
        <div className={styles.modalFooter}>
          <div className={styles.pagination}>
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 0}
              className={styles.pageBtn}
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <span className={styles.pageIndicator}>
              Page {currentPage + 1} of {samplePages.length}
            </span>
            <button 
              onClick={handleNext} 
              disabled={currentPage === samplePages.length - 1}
              className={styles.pageBtn}
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <button 
            className={styles.downloadBtn}
            onClick={() => {
              alert("Your sample chapter PDF download has started! (Mock PDF download)");
            }}
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
