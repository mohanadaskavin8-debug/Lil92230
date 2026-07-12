import { motion } from 'framer-motion';

const RELEASES = [
  { year: '2025', title: 'Free The Men', type: 'EP', tracks: "Shaking Up Your Block / Goin' Touring (feat. 30 Bop Baby) / Fill Up The Car (feat. Yung Skz) / 30 Round (feat. 22 Gremlin) / In The Cut / Free The Men (feat. 30 Bop Baby & Lil Threatski)" },
  { year: '2024', title: 'Rookie Of The Year (R.O.T.Y)', type: 'Album' },
  { year: '2024', title: 'Slip Up (feat. Libb)', type: 'Single' },
  { year: '2023', title: 'Flu (feat. Libb)', type: 'Single' },
  { year: '2023', title: 'Dark', type: 'Single' },
  { year: '2023', title: 'Blitz', type: 'Single' },
  { year: '2023', title: '22 Or The 30 (feat. Libb)', type: 'Single' },
];

export default function Discography() {
  return (
    <section className="bg-[#050505] text-white py-32 px-6 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-anton text-5xl md:text-8xl mb-16 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40"
        >
          DISCOGRAPHY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RELEASES.map((release, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-white/5 border border-white/10 p-8 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${release.type === 'EP' || release.type === 'Album' ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-blue-400 font-mono text-xs tracking-widest mb-2 block">{release.year} // {release.type.toUpperCase()}</span>
                  <h3 className="font-anton text-3xl md:text-5xl tracking-wide group-hover:text-blue-100 transition-colors">{release.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors shrink-0">
                  <span className="text-xl leading-none block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </div>
              </div>
              
              {release.tracks && (
                <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/50 text-sm font-sans leading-relaxed">
                    {release.tracks.split(' / ').map((track, idx) => (
                      <span key={idx} className="block mb-1">• {track}</span>
                    ))}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
