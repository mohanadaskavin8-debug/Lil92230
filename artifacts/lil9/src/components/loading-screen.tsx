import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep it under 2.5s
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.h1
              className="text-7xl md:text-9xl font-display tracking-widest text-white relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LIL 9
            </motion.h1>
            
            {/* Glitch effects */}
            <motion.h1
              className="text-7xl md:text-9xl font-display tracking-widest text-accent absolute top-0 left-[2px] z-0 opacity-50"
              animate={{ 
                x: [-2, 2, -2, 0],
                opacity: [0, 0.8, 0, 0]
              }}
              transition={{ 
                duration: 0.4, 
                times: [0, 0.2, 0.4, 1], 
                repeat: Infinity,
                repeatDelay: 1.2
              }}
            >
              LIL 9
            </motion.h1>
            
            <motion.h1
              className="text-7xl md:text-9xl font-display tracking-widest text-red-600 absolute top-0 left-[-2px] z-0 opacity-50"
              animate={{ 
                x: [2, -2, 2, 0],
                opacity: [0, 0.8, 0, 0]
              }}
              transition={{ 
                duration: 0.4, 
                times: [0, 0.2, 0.4, 1], 
                repeat: Infinity,
                repeatDelay: 0.8,
                delay: 0.2
              }}
            >
              LIL 9
            </motion.h1>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono tracking-widest text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            LOADING THE 6IX...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
