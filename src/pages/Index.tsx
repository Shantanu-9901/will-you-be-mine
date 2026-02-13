import { useState, useEffect } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineQuestion from "@/components/ValentineQuestion";
import photo1 from "@/assets/photo-1.jpeg";
import photo2 from "@/assets/photo-2.jpeg";
import photo3 from "@/assets/photo-3.jpeg";
import photo4 from "@/assets/photo-4.jpeg";
import photo5 from "@/assets/photo-5.jpeg";
import photo6 from "@/assets/photo-6.jpeg";
import photo7 from "@/assets/photo-7.jpeg";

const memories = [
  { src: photo2, caption: "Our first selfie 🖤", rotate: "-3deg", size: "large" },
  { src: photo3, caption: "Rose petals & you 🌹", rotate: "2deg", size: "medium" },
  { src: photo4, caption: "Adventures together 🌲", rotate: "-1deg", size: "large" },
  { src: photo5, caption: "Mountain views 🏔️", rotate: "3deg", size: "medium" },
  { src: photo6, caption: "Your beautiful smile 💕", rotate: "-2deg", size: "medium" },
  { src: photo7, caption: "Snow day magic ❄️", rotate: "1deg", size: "large" },
];

const Index = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-idx]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      <div className="fixed inset-0 bg-rose-glow pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Hero Section - Full viewport */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
            <img
              src={photo1}
              alt=""
              className="w-full h-full object-cover opacity-20 blur-sm scale-110"
            />
          </div>

          <div className="relative z-20 text-center">
            <div className="mb-8 animate-float-heart">
              <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-romantic mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <img src={photo1} alt="Us" className="w-full h-full object-cover" />
              </div>
            </div>

            <h1 className="font-display text-6xl md:text-9xl text-primary mb-3 drop-shadow-lg">
              Happy Valentine's Day
            </h1>
            <p className="text-rose-soft font-heading text-xl md:text-3xl italic mb-6">
              To the love of my life ❤️
            </p>
            <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
              Every moment with you feels like a dream I never want to wake up from.
              You make my world brighter, warmer, and so much more beautiful.
            </p>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <span className="text-muted-foreground text-2xl">↓</span>
            </div>
          </div>
        </section>

        {/* Memories Section */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl text-primary text-center mb-16">
            Our Memories 💫
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {memories.map((mem, i) => (
              <div
                key={i}
                data-idx={i}
                className={`group transition-all duration-700 ease-out ${
                  visibleCards.has(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                } ${i % 2 === 1 ? "md:mt-16" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="relative bg-card rounded-2xl overflow-hidden shadow-romantic/30 border border-primary/10 hover:shadow-romantic transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  style={{ transform: `rotate(${mem.rotate})` }}
                >
                  <div className={`overflow-hidden ${mem.size === "large" ? "h-64 md:h-80" : "h-48 md:h-64"}`}>
                    <img
                      src={mem.src}
                      alt={mem.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 font-heading text-sm md:text-base text-foreground italic">
                    {mem.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Question Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <ValentineQuestion />

          <p className="mt-20 text-muted-foreground text-xs font-heading">
            Made with all my ❤️ for you
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
