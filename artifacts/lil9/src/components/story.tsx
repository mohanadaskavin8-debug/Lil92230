import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import lil9Maybach from '@/assets/lil9-maybach.png';

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="story" className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Story Text */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-display tracking-tight uppercase text-white mb-8"
          >
            THE <span className="text-stroke">STORY</span>
          </motion.h2>
          
          <div className="space-y-6 text-muted-foreground font-sans text-lg md:text-xl leading-relaxed max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lil 9 is a rising rapper out of Toronto, bringing raw, unapologetic drill and trap energy to the 6ix. Building a loyal fanbase off hard-hitting singles and a distinct, freezing Toronto sound, he is rapidly climbing from the streets to the spotlight.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              With an aesthetic deeply rooted in cold nights, blacked-out SUVs, and relentless ambition, Lil 9 drops anthems for the trenches. After a prolific run of singles in 2023, his debut album "Rookie Of The Year" cemented his presence, leading into his most explosive release yet, the "Free The Men" EP.
            </motion.p>
          </div>

          {/* Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            <StatCounter value="50K+" label="Monthly Listeners" delay={0.4} inView={isInView} />
            <StatCounter value="1.5M+" label="Total Streams" delay={0.5} inView={isInView} />
            <StatCounter value="12" label="Releases" delay={0.6} inView={isInView} />
          </div>
        </div>

        {/* Editorial Image */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border border-white/10 group">
          <motion.div className="w-full h-[120%]" style={{ y: imgY }}>
            <img 
              src={lil9Maybach} 
              alt="Lil 9 by Maybach" 
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
            TORONTO, ON — PRESENT DAY
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, label, delay, inView }: { value: string, label: string, delay: number, inView: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-2"
    >
      <div className="text-4xl md:text-5xl font-display text-white tracking-wide">{value}</div>
      <div className="font-mono text-xs tracking-widest text-accent uppercase">{label}</div>
    </motion.div>
  );
}
