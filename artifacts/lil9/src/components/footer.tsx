import { useState } from 'react';
import { SiInstagram, SiSpotify, SiApple, SiYoutube } from 'react-icons/si';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-8 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* CONNECT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display tracking-tight uppercase text-white mb-8">
              CON<span className="text-stroke">NECT</span>
            </h2>
            
            <div className="flex gap-6 mb-12">
              <SocialLink href="https://www.instagram.com/lil9_2230" icon={<SiInstagram />} label="Instagram" />
              <SocialLink href="https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod" icon={<SiSpotify />} label="Spotify" />
              <SocialLink href="https://music.apple.com/ca/artist/lil-9/1685127697" icon={<SiApple />} label="Apple Music" />
              <SocialLink href="https://youtube.com" icon={<SiYoutube />} label="YouTube" />
            </div>

            <div className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              <span className="text-white/40 block mb-1">Booking & Press</span>
              <a href="mailto:booking@lil9.com" className="text-white hover:text-accent transition-colors text-lg">booking@lil9.com</a>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col justify-center">
            <h3 className="font-mono text-sm tracking-widest text-accent uppercase mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Join the list for exclusive drops, merch, and tour dates.</p>
            
            {subscribed ? (
              <div className="bg-white/5 border border-accent/50 p-6 text-center text-accent font-mono text-sm uppercase tracking-widest">
                YOU ARE NOW LOCKED IN.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  required
                  placeholder="ENTER EMAIL ADDRESS" 
                  className="bg-transparent border border-white/20 px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent w-full transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-8 py-3 font-display tracking-widest hover:bg-accent transition-colors whitespace-nowrap"
                >
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MASSIVE CITY TAGLINE */}
        <div className="w-full flex justify-center mb-16 select-none pointer-events-none">
          <h1 className="text-[12vw] font-display text-white/5 tracking-tighter leading-none whitespace-nowrap">
            TORONTO · THE 6IX
          </h1>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 font-mono text-xs tracking-widest text-white/30 uppercase">
          <div>© 2025 LIL 9. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="group flex flex-col items-center gap-3"
      aria-label={label}
    >
      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-2xl text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
    </a>
  );
}
