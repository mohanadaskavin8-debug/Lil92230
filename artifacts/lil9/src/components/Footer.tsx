import { motion } from 'framer-motion';
import { SiSpotify, SiApplemusic } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black py-24 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iNCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')]"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-anton text-6xl md:text-9xl text-white/5 tracking-tighter mb-12"
        >
          LIL 9
        </motion.h2>

        <div className="flex gap-8 mb-16">
          <a href="https://www.instagram.com/lil9_2230" target="_blank" rel="noreferrer" className="text-white/60 hover:text-blue-400 hover:scale-125 transition-all duration-300">
            <FiInstagram size={40} />
          </a>
          <a href="https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod" target="_blank" rel="noreferrer" className="text-white/60 hover:text-blue-400 hover:scale-125 transition-all duration-300">
            <SiSpotify size={40} />
          </a>
          <a href="https://music.apple.com/ca/artist/lil-9/1685127697" target="_blank" rel="noreferrer" className="text-white/60 hover:text-blue-400 hover:scale-125 transition-all duration-300">
            <SiApplemusic size={40} />
          </a>
        </div>

        <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
          © {new Date().getFullYear()} LIL 9. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
