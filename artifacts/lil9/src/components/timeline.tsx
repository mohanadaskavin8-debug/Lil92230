import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import coverFreeTheMen from '@/assets/cover-free-the-men.png';
import coverRoty from '@/assets/cover-roty.png';

const MILESTONES = [
  {
    year: "2023",
    title: "THE ARRIVAL",
    description: "Lil 9 breaks into the Toronto scene. Debut singles drop and immediately catch heat in the streets.",
    list: ["Flu (feat. Libb)", "Dark", "Blitz", "22 Or The 30 (feat. Libb)"],
    image: null
  },
  {
    year: "2024",
    title: "ROOKIE OF THE YEAR",
    description: "The debut album arrives. A defining moment that solidifies his position as a rising star in the 6ix.",
    list: ["Rookie Of The Year (R.O.T.Y)", "Slip Up (feat. Libb)"],
    image: coverRoty
  },
  {
    year: "2025",
    title: "FREE THE MEN",
    description: "His biggest year yet. The highly anticipated EP drops alongside the massive music video 'First Day Out / Bitch I'm Back'.",
    list: [
      "Shaking Up Your Block", 
      "Goin' Touring (feat. 30 Bop Baby)", 
      "Fill Up The Car (feat. Yung Skz)",
      "30 Round (feat. 22 Gremlin)",
      "In The Cut",
      "Free The Men (feat. 30 Bop Baby & Lil Threatski)"
    ],
    image: coverFreeTheMen
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-12 bg-zinc-950 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-8xl font-display tracking-tight uppercase text-white">
            TIME<span className="text-stroke">LINE</span>
          </h2>
          <p className="font-mono text-sm tracking-[0.2em] text-accent mt-4">THE RISE OF LIL 9</p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* The Progress Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-accent origin-top shadow-[0_0_15px_rgba(0,255,65,0.5)]"
              style={{ height: progressHeight }}
            />
          </div>

          <div className="space-y-24">
            {MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={milestone.year} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Glowing Dot on the line */}
                  <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent -translate-x-1/2 z-10" />

                  {/* Left Side (Content or Empty) */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:order-last md:pl-16'}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-black/50 border border-white/10 p-6 md:p-8 backdrop-blur-md hover:border-accent/50 transition-colors w-full"
                    >
                      <div className="font-display text-5xl md:text-7xl text-white/20 leading-none mb-2">{milestone.year}</div>
                      <h3 className="font-display text-2xl md:text-3xl text-white tracking-widest uppercase mb-4">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm font-sans mb-6">{milestone.description}</p>
                      
                      <ul className="space-y-2">
                        {milestone.list.map((track, i) => (
                          <li key={i} className="font-mono text-xs tracking-wider text-white/80 flex items-start gap-2">
                            <span className="text-accent mt-0.5">›</span>
                            {track}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Right Side (Image or Empty) */}
                  <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                    {milestone.image && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-48 xl:w-64 aspect-square bg-zinc-900 border border-white/10 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500"
                      >
                        <img src={milestone.image} alt={milestone.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile Image (shown underneath text on small screens) */}
                  {milestone.image && (
                    <div className="w-full pl-12 mt-6 md:hidden">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-32 aspect-square border border-white/10 p-1 bg-zinc-900"
                      >
                        <img src={milestone.image} alt={milestone.title} className="w-full h-full object-cover grayscale" />
                      </motion.div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
