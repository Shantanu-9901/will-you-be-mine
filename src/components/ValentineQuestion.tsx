import { useState, useCallback, useRef } from "react";
import Fireworks from "./Fireworks";

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
        <Fireworks />
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center animate-bounce pointer-events-none">
            <p className="font-display text-5xl md:text-7xl text-gold mb-4 drop-shadow-lg">
              That's Great! 🎉
            </p>
            <p className="font-heading text-3xl md:text-5xl text-foreground italic">
              About to be <span className="text-primary font-bold">Mrs. Patil</span> 💍
            </p>
            <div className="mt-6 text-6xl animate-pulse">❤️</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <h2 className="font-display text-4xl md:text-6xl text-gold mb-10 animate-pulse-glow inline-block px-6 py-2 rounded-xl">
        Will You Be My Valentine? 💕
      </h2>

      <div className="flex gap-8 justify-center mt-8">
        <button
          onClick={() => setAccepted(true)}
          className="gradient-romantic text-primary-foreground font-heading text-xl md:text-2xl px-10 py-4 rounded-full shadow-romantic hover:scale-110 transition-all duration-300 hover:shadow-gold"
        >
          Yes! 💖
        </button>

        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
          className="bg-secondary text-secondary-foreground font-heading text-xl md:text-2xl px-10 py-4 rounded-full transition-all duration-200 hover:bg-muted"
          style={noPos ? { position: "fixed", ...noPos, zIndex: 100 } : undefined}
        >
          No 😢
        </button>
      </div>
    </div>
  );
};

export default ValentineQuestion;
