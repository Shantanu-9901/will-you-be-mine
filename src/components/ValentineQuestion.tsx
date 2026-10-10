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

        <div className="my-6 -mx-6 sm:-mx-10" aria-hidden="true">
          <svg
            viewBox="0 0 640 150"
            className="mx-auto block h-auto w-full overflow-visible"
            fill="none"
          >
            <defs>
              <linearGradient id="heart-thread" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--rose-soft))" stopOpacity=".35" />
                <stop offset=".5" stopColor="hsl(var(--gold))" />
                <stop offset="1" stopColor="hsl(var(--rose-soft))" stopOpacity=".35" />
              </linearGradient>
            </defs>
            <path
              d="M0 76 C72 76 132 76 202 76 M438 76 C508 76 568 76 640 76"
              stroke="url(#heart-thread)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M320 132 C290 114 192 87 192 58 C192 32 254 25 320 59 C386 25 448 32 448 58 C448 87 350 114 320 132 Z"
              stroke="url(#heart-thread)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="320" cy="136" r="3.5" fill="hsl(var(--primary))" />
          </svg>
        </div>

        <h2 className="mb-8 font-display text-4xl text-gold sm:text-5xl md:text-6xl">
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
