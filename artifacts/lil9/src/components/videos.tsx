import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VIDEOS = [
  {
    id: "SdnPxFY46dc",
    title: "First Day Out / Bitch I'm Back",
    thumbnail: "https://img.youtube.com/vi/SdnPxFY46dc/maxresdefault.jpg",
    featured: true
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder for other videos, can be replaced by real ones later
    title: "Slip Up (feat. Libb)",
    thumbnail: "https://img.youtube.com/vi/SdnPxFY46dc/hqdefault.jpg", // Using same for placeholder aesthetic
    featured: false
  },
  {
    id: "dQw4w9WgXcQ2",
    title: "Flu (feat. Libb)",
    thumbnail: "https://img.youtube.com/vi/SdnPxFY46dc/mqdefault.jpg",
    featured: false
  }
];

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
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-sm font-mono tracking-widest text-accent hover:text-white transition-colors uppercase">
            View All on YouTube →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Video */}
          <div className="md:col-span-8 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative aspect-video w-full cursor-pointer overflow-hidden bg-zinc-900 border border-white/5">
                  <motion.img 
                    src={VIDEOS[0].thumbnail} 
                    alt={VIDEOS[0].title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-white group-hover:text-black fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-mono text-accent text-xs tracking-widest uppercase mb-2">Latest Release</p>
                    <h3 className="font-display text-3xl text-white tracking-wide">{VIDEOS[0].title}</h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${VIDEOS[0].id}?autoplay=1`} 
                    title={VIDEOS[0].title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Secondary Videos Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {VIDEOS.slice(1).map((video, idx) => (
              <div key={idx} className="relative aspect-video md:h-[calc(50%-12px)] w-full group cursor-pointer overflow-hidden bg-zinc-900 border border-white/5">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-display text-xl text-white tracking-wide">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
