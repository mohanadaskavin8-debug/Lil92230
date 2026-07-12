import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Scanlines / Noise overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] mix-blend-overlay"></div>
          
          <motion.h1 
            className="font-anton text-7xl md:text-9xl text-white tracking-widest uppercase relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            LIL 9
            <motion.span 
              className="absolute inset-0 text-blue-500 opacity-50 mix-blend-screen blur-[2px]"
              animate={{ x: [-2, 2, -1, 1, 0], y: [1, -1, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
            >
              LIL 9
            </motion.span>
            <motion.span 
              className="absolute inset-0 text-red-500 opacity-50 mix-blend-screen blur-[2px]"
              animate={{ x: [2, -2, 1, -1, 0], y: [-1, 1, -2, 2, 0] }}
              transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
            >
              LIL 9
            </motion.span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
