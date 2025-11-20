
import React from 'react';
import Logo from './Logo';
import { PencilIcon } from './icons/PencilIcon';

interface LandingPageProps {
  onExplore: () => void;
  onReadStory: () => void;
  backgroundImage: string;
  onEditBackground: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onExplore, onReadStory, backgroundImage, onEditBackground }) => {
  // Default image: A beautiful misty tropical view representing Bogor (Puncak/Botanical Garden vibe)
  const effectiveImage = backgroundImage || 'https://images.unsplash.com/photo-1634894030095-539c4a0d49e6?q=80&w=2832&auto=format&fit=crop';

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-emerald-900 font-sans">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={effectiveImage} 
          alt="Pemandangan Alam Bogor" 
          className="w-full h-full object-cover object-center transition-transform duration-[20s] hover:scale-110 ease-linear"
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90"></div>
      </div>
      
      {/* Edit Background Button */}
      <button 
        onClick={onEditBackground}
        className="absolute top-6 right-6 z-50 p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-all border border-white/10 group"
        title="Ubah Gambar Background"
      >
        <PencilIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </button>

      {/* Header / Navbar Area */}
      <header className="absolute top-0 left-0 right-0 z-30 p-8 md:p-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Area */}
            <Logo variant="white" className="h-20 md:h-24 w-auto drop-shadow-2xl" />
          </div>
        </div>
      </header>
      
      {/* Main Content - Centered Vertically using flex-grow and justify-center */}
      <main className="flex-grow flex flex-col justify-center relative z-20 container mx-auto px-6 md:px-12 py-32">
        <div className="max-w-4xl flex flex-col items-start text-left animate-fade-in-up">
            
            {/* Aesthetic Badge / Eyebrow Text */}
            <div className="flex items-center space-x-3 mb-6 opacity-90">
                <div className="h-[1px] w-12 bg-emerald-400"></div>
                <div className="px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-50 text-xs md:text-sm font-serif uppercase tracking-[0.25em] shadow-lg">
                    The Rain City Guide
                </div>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-50 to-emerald-200">
                Bogor's <br/>
                <span className="italic font-light text-white">Hidden Gems</span>
            </h1>
            
            <p className="font-serif text-xl md:text-3xl text-white mb-12 max-w-2xl leading-relaxed tracking-wide border-l-4 border-emerald-400 pl-8 ml-1 italic drop-shadow-lg">
                "Temukan pesona alam yang menyejukkan, warisan sejarah yang agung, dan sudut-sudut kuliner otentik yang belum pernah Anda jelajahi sebelumnya."
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pl-1">
                <button
                    onClick={onExplore}
                    className="group relative px-8 py-4 bg-emerald-500 text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:bg-emerald-400 hover:scale-105"
                >
                    <span className="relative z-10 flex items-center">
                        Mulai Menjelajah
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </button>
                
                <button
                    onClick={onReadStory}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white font-medium rounded-full transition-all hover:border-white/40 hover:text-emerald-100 flex items-center justify-center"
                >
                    Baca Cerita Kota
                </button>
            </div>

            {/* Quick Stats / Features */}
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 w-full md:w-auto pl-1">
                <div className="group cursor-default">
                    <p className="font-serif text-3xl md:text-4xl font-bold group-hover:text-emerald-300 transition-colors">6</p>
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Kecamatan</p>
                </div>
                <div className="group cursor-default">
                    <p className="font-serif text-3xl md:text-4xl font-bold group-hover:text-emerald-300 transition-colors">68</p>
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Kelurahan</p>
                </div>
                 <div className="group cursor-default">
                    <p className="font-serif text-3xl md:text-4xl font-bold group-hover:text-emerald-300 transition-colors">∞</p>
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">Kenangan</p>
                </div>
            </div>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white/30 text-[10px] container mx-auto flex justify-between items-end pointer-events-none">
        <p>&copy; {new Date().getFullYear()} SindangBogor.com</p>
        <div className="text-right hidden md:block">
            <p className="font-serif italic text-white/50">"Buitenzorg"</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
