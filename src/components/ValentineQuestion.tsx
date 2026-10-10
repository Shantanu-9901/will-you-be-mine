import { useState, useCallback, useRef } from "react";
import Fireworks from "./Fireworks";
import bgPhoto from "@/assets/E60461EA-1513-4C0D-8FE8-379BF97333BB.jpg";

const ValentineQuestion = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState<{ top: string; left: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const maxX = Math.min(window.innerWidth - 120, window.innerWidth * 0.85);
    const maxY = Math.min(window.innerHeight - 50, window.innerHeight * 0.85);
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setNoPos({ top: `${y}px`, left: `${x}px` });
  }, []);

  if (accepted) {
    return (
      <>
        {/* Background photo with fade */}
        <div className="fixed inset-0 z-40 animate-fade-in-slow">
          <img
            src={bgPhoto}
            alt="Our moment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        </div>

        <Fireworks />
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center animate-scale-up pointer-events-none">
            <p className="font-display text-5xl md:text-8xl text-gold mb-6 drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              That's Great! 🎉
            </p>
            <p className="font-heading text-3xl md:text-5xl text-foreground italic drop-shadow-lg">
              About to be <span className="text-primary font-bold">Future Mrs. Patil</span> 💍
            </p>
            <div className="mt-8 text-7xl animate-pulse">❤️</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-3xl">
      <div className="rounded-3xl border border-primary/25 bg-card/70 px-6 py-8 text-center shadow-romantic backdrop-blur-xl sm:px-10 sm:py-10">
        <p className="mb-6 font-heading text-lg italic text-rose-soft sm:text-xl">
          One lovely meeting, a lifetime of possibilities…
        </p>

        <img
          src={bgPhoto}
          alt="A photo of us together"
          className="mx-auto mb-8 h-56 w-44 rounded-2xl border-2 border-primary/30 object-cover shadow-romantic sm:h-64 sm:w-48"
        />

        <h2 className="mb-8 inline-block rounded-xl px-3 py-2 font-display text-4xl text-gold animate-pulse-glow sm:text-5xl md:text-6xl">
          Will You Marry Me? 💕
        </h2>

        <div className="mt-2 flex flex-wrap justify-center gap-5 sm:gap-8">
          <button
            onClick={() => setAccepted(true)}
            className="gradient-romantic rounded-full px-10 py-4 font-heading text-xl text-primary-foreground shadow-romantic transition-all duration-300 hover:scale-110 hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Yes! 💖
          </button>

          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="rounded-full bg-secondary px-10 py-4 font-heading text-xl text-secondary-foreground transition-all duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={noPos ? { position: "fixed", ...noPos, zIndex: 100 } : undefined}
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentineQuestion;
