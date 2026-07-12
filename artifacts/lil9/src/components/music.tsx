import { motion } from 'framer-motion';
import { SiSpotify, SiApple } from 'react-icons/si';
import coverFreeTheMen from '@/assets/cover-free-the-men.png';
import coverRoty from '@/assets/cover-roty.png';

const RELEASES = [
  {
    title: "Free The Men",
    type: "EP",
    year: "2025",
    cover: coverFreeTheMen,
    linkSpotify: "https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod",
    linkApple: "https://music.apple.com/ca/artist/lil-9/1685127697"
  },
  {
    title: "Rookie Of The Year",
    type: "Album",
    year: "2024",
    cover: coverRoty,
    linkSpotify: "https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod",
    linkApple: "https://music.apple.com/ca/artist/lil-9/1685127697"
  }
];

export default function Music() {
  return (
    <section id="music" className="py-24 md:py-32 px-6 md:px-12 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative large background text */}
      <div className="absolute -right-20 top-0 text-[20vw] font-display text-white/5 tracking-tighter leading-none pointer-events-none select-none">
        MUSIC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-display tracking-tight uppercase text-white">
            DISCO<span className="text-stroke">GRAPHY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Featured Releases */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {RELEASES.map((release, idx) => (
              <motion.div 
                key={release.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col sm:flex-row gap-6 group"
              >
                <div className="w-full sm:w-48 shrink-0 overflow-hidden bg-black border border-white/10 aspect-square">
                  <img 
                    src={release.cover} 
                    alt={release.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
                    {release.type} • {release.year}
                  </div>
                  <h3 className="font-display text-4xl text-white tracking-wide uppercase mb-6">
                    {release.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <a 
                      href={release.linkSpotify} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/20 bg-transparent px-4 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                      <SiSpotify className="w-4 h-4" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider">Spotify</span>
                    </a>
                    <a 
                      href={release.linkApple} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-white/20 bg-transparent px-4 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                      <SiApple className="w-4 h-4" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider">Apple Music</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Spotify Player */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-32 w-full h-[500px] bg-black border border-white/10 p-2"
            >
              <iframe 
                src="https://open.spotify.com/embed/artist/1DgcL6YBYJhkbWMXvzqlod?utm_source=generator&theme=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen={false} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-sm"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
