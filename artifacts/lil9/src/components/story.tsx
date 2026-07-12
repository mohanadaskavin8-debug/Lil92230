import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import lil9Maybach from '@/assets/lil9-maybach.png';
import joshua22 from '@/assets/joshua-22.png';
import jaheimGremz from '@/assets/jaheim-gremz.png';

const MEMORIAL = [
  {
    photo: joshua22,
    name: 'Joshua "22" Connell-Wong',
    alias: '22',
    born: '22 JUL 1999',
    passed: '25 JUN 2022',
  },
  {
    photo: jaheimGremz,
    name: 'Jaheim "Gremz" Spence',
    alias: 'GREMZ',
    born: '09 MAR 2001',
    passed: '25 JUN 2022',
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const memRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const memInView = useInView(memRef, { once: true, margin: "-100px" });

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
              Lil 9 is a rapper out of Nonquon, Oshawa. What started as a passion turned into a way of life — for over five years he's been making music, turning raw emotion and real experiences into a sound that's entirely his own.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At the heart of everything he makes is loss. Lil 9 raps to keep the memory of his day one brothers alive — the friends he came up with, gone far too soon. Every record is a piece of them: a way to carry their names forward and turn grief into something that lasts.
            </motion.p>
          </div>

          {/* Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            <StatCounter value="50K+" label="Monthly Listeners" delay={0.4} inView={isInView} />
            <StatCounter value="1.5M+" label="Total Streams" delay={0.5} inView={isInView} />
            <StatCounter value="5+ YRS" label="On The Grind" delay={0.6} inView={isInView} />
          </div>
        </div>

        {/* Editorial Image */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border border-white/10 group">
          <motion.div className="w-full h-[120%]" style={{ y: imgY }}>
            <img
              src={lil9Maybach}
              alt="Lil 9"
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
            NONQUON RD — OSHAWA, ON
          </div>
        </div>
      </div>

      {/* IN LOVING MEMORY — homage to day one brothers */}
      <div ref={memRef} className="max-w-7xl mx-auto mt-28 md:mt-40 pt-16 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={memInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">Forever Day Ones</span>
          <h3 className="text-4xl md:text-7xl font-display tracking-tight uppercase text-white">
            IN LOVING <span className="text-stroke">MEMORY</span>
          </h3>
          <p className="text-muted-foreground font-sans text-base md:text-lg mt-6 max-w-xl">
            Gone but never forgotten. Every track carries their name — this is for the brothers who started it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {MEMORIAL.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={memInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-950">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-5 right-5 font-display text-5xl md:text-6xl text-white/20 tracking-widest leading-none select-none">
                  {person.alias}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h4 className="font-display text-2xl md:text-3xl text-white tracking-wide uppercase leading-tight">
                    {person.name}
                  </h4>
                  <div className="flex items-center gap-3 mt-3 font-mono text-xs tracking-widest text-accent uppercase">
                    <span>{person.born}</span>
                    <span className="w-6 h-[1px] bg-accent/60" />
                    <span>{person.passed}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={memInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center font-mono text-xs tracking-[0.3em] text-white/40 uppercase mt-14"
        >
          Long Live The 22s · Long Live Gremz
        </motion.p>
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
