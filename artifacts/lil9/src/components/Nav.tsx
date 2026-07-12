import { motion } from 'framer-motion';
import { SiSpotify, SiApplemusic } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';

export default function Nav() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="font-anton text-2xl tracking-widest text-white cursor-pointer hover:text-blue-400 transition-colors">
        LIL 9
      </div>
      <div className="flex gap-6 text-white">
        <a href="https://www.instagram.com/lil9_2230" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all">
          <FiInstagram size={24} />
        </a>
        <a href="https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all">
          <SiSpotify size={24} />
        </a>
        <a href="https://music.apple.com/ca/artist/lil-9/1685127697" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all">
          <SiApplemusic size={24} />
        </a>
      </div>
    </motion.nav>
  );
}
