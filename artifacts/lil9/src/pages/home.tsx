import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Discography from '@/components/Discography';
import Footer from '@/components/Footer';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Prevent scrolling while loading
  useEffect(() => {
    if (!loadingComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      window.scrollTo(0, 0);
    }
  }, [loadingComplete]);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
      
      {loadingComplete && (
        <main className="relative z-10 animate-in fade-in duration-1000">
          <Nav />
          <Hero />
          <Discography />
          <Footer />
        </main>
      )}
    </div>
  );
}
