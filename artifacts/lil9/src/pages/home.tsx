import { useState } from 'react';
import LoadingScreen from '@/components/loading-screen';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Videos from '@/components/videos';
import Music from '@/components/music';
import Story from '@/components/story';
import Timeline from '@/components/timeline';
import Footer from '@/components/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-foreground relative selection:bg-accent selection:text-black">
      {/* Cinematic noise overlay applied globally */}
      <div className="noise-overlay" />

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {/* We keep the rest mounted but maybe visually hidden or delayed if preferred. 
          For smooth experience, they mount immediately but intro animates them or user waits for loading screen to clear. */}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Navbar />
        <main>
          <Hero />
          <Videos />
          <Music />
          <Story />
          <Timeline />
        </main>
        <Footer />
      </div>
    </div>
  );
}
