import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import lil9Suv from '@/assets/lil9-suv.png';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="latest" className="relative h-[100dvh] w-full overflow-hidden bg-black flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <img 
          src={lil9Suv} 
          alt="Lil 9" 
          className="w-full h-full object-cover object-center md:object-top"
        />
        {/* Gradients to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Out Now</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-display tracking-tight text-white uppercase leading-none max-w-3xl">
            First Day Out / <br /> <span className="text-stroke">Bitch I'm Back</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <Dialog>
            <DialogTrigger asChild>
              <button className="group flex items-center gap-3 bg-accent text-black px-6 py-4 font-display tracking-widest text-lg hover:bg-white transition-colors duration-300">
                <Play className="w-5 h-5 fill-black" />
                WATCH VIDEO
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/SdnPxFY46dc?autoplay=1" 
                  title="Lil 9 - First Day Out / Bitch I&#39;m Back" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
          
          <a 
            href="https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-4 font-display tracking-widest text-lg hover:bg-white/10 transition-colors duration-300"
          >
            LISTEN ON SPOTIFY
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase rotate-90 mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-accent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
