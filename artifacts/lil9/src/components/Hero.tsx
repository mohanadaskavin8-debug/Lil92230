import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image & Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('https://img.youtube.com/vi/SdnPxFY46dc/maxresdefault.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ filter: 'grayscale(60%) contrast(120%)' }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      
      {/* Scanline Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 cursor-pointer group relative"
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
          <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Play className="text-white w-8 h-8 md:w-12 md:h-12 ml-2 group-hover:text-blue-400 transition-colors" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-anton text-7xl md:text-[12rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-4"
        >
          LIL 9
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-sans text-sm md:text-xl tracking-[0.3em] md:tracking-[0.5em] text-blue-200 uppercase"
        >
          First Day Out / Bitch I'm Back — Out Now
        </motion.p>
      </div>

      {/* Video Lightbox */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4" 
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,210,255,0.15)] relative"
            >
              <button 
                className="absolute top-4 right-4 text-white hover:text-blue-400 z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                onClick={(e) => { e.stopPropagation(); setIsVideoOpen(false); }}
              >
                <X size={24} />
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/SdnPxFY46dc?autoplay=1" 
                title="First Day Out / Bitch I'm Back" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
