import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const FEATURED = {
  id: "qLlmzliw1tQ",
  title: "Lil9 Ft Libb - 22 Or The 30",
  thumbnail: "https://img.youtube.com/vi/qLlmzliw1tQ/maxresdefault.jpg",
};

export default function Videos() {
  return (
    <section id="videos" className="py-24 md:py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-display tracking-tight uppercase text-white">
            VISU<span className="text-stroke">ALS</span>
          </h2>
          <a
            href="https://www.youtube.com/@2230World"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-mono tracking-widest text-accent hover:text-white transition-colors uppercase"
          >
            View All on YouTube →
          </a>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="group"
        >
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" aria-label={`Play ${FEATURED.title} music video`} className="relative aspect-video w-full cursor-pointer overflow-hidden bg-zinc-900 border border-white/5 text-left block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <img
                  src={FEATURED.thumbnail}
                  alt={FEATURED.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">Official Music Video</p>
                  <h3 className="font-display text-3xl md:text-5xl text-white tracking-wide uppercase">{FEATURED.title}</h3>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${FEATURED.id}?autoplay=1`}
                  title={FEATURED.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
