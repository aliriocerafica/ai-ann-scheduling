'use client';

import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import RecentProjectsSection from './components/RecentProjectsSection';
import Footer from './components/Footer';
import { useState } from 'react';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RecentProjectsSection />
      <Footer />
    </div>
  );
}