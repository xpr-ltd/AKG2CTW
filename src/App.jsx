import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BigIdea from './components/BigIdea/BigIdea';
import WhyThisBook from './components/WhyThisBook/WhyThisBook';
import BookPreview from './components/BookPreview/BookPreview';
import Author from './components/Author/Author';
import JoinMission from './components/JoinMission/JoinMission';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import SectionDivider from './components/SectionDivider/SectionDivider';
import SampleModal from './components/SampleModal/SampleModal';

function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  const handleOpenSample = () => setSampleModalOpen(true);
  const handleCloseSample = () => setSampleModalOpen(false);

  return (
    <>
      {/* Scroll Reading Progress */}
      <ProgressBar />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenSample={handleOpenSample} />

        <SectionDivider type="glow" />

        {/* 2. Thesis/Big Idea */}
        <BigIdea />

        <SectionDivider type="hologram" />

        {/* 3. Why This Book Matters */}
        <WhyThisBook />

        <SectionDivider type="gradient" />

        {/* 4. What's Inside? (Checklist & Spread) */}
        <BookPreview />



        {/* 6. Meet the Author */}
        <Author />

        {/* 7. Join the Mission (White to gold gradient) */}
        <JoinMission />

        {/* 8. Final Call to Action (Rich Navy bg) */}
        <CTA onOpenSample={handleOpenSample} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Sample Reading Modal */}
      <SampleModal isOpen={sampleModalOpen} onClose={handleCloseSample} />
    </>
  );
}

export default App;
