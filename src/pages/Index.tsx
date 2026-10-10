import { useState, useEffect } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineQuestion from "@/components/ValentineQuestion";
import photo1 from "@/assets/IMG_1118.jpg";
import photo2 from "@/assets/IMG_1119.jpg";
import photo3 from "@/assets/IMG_1124.jpg";

const memories = [
  { type: "image", src: photo1, caption: "Golden-hour glow ✨" },
  {
    type: "video",
    src: new URL("../assets/ScreenRecording_10-11-2026 02-35-06_1.mov", import.meta.url).href,
    poster: photo3,
    caption: "That lovely smile ❤️",
  },
  { type: "image", src: photo2, caption: "A little coconut break 🥥" },
  {
    type: "video",
    src: new URL("../assets/ScreenRecording_10-11-2026 02-35-22_1.mov", import.meta.url).href,
    poster: photo1,
    caption: "A little kiss for the camera 😘",
  },
  { type: "image", src: photo3, caption: "Sunshine and you ☀️" },
  {
    type: "video",
    src: new URL("../assets/ScreenRecording_10-11-2026 02-35-46_1.mov", import.meta.url).href,
    poster: photo2,
    caption: "Pretty in pink 🌸",
  },
  {
    type: "video",
    src: new URL("../assets/ScreenRecording_10-11-2026 02-36-11_1.mov", import.meta.url).href,
    poster: photo3,
    caption: "A playful little moment 💚",
  },
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
                <img src={photo1} alt="Us" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <h1 className="font-display text-6xl md:text-9xl text-primary mb-3 drop-shadow-lg">
              A New Chapter Begins 💍
            </h1>
            <p className="text-rose-soft font-heading text-xl md:text-3xl italic mb-6">
              To the most beautiful woman ❤️
            </p>
            <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
              We’ve shared one lovely meeting, and I’m excited for all the conversations,
              memories, and moments still ahead of us. I’m so glad our paths crossed.
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
            My Love 💫
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
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-romantic/30 transition-shadow duration-500 hover:shadow-romantic"
                >
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted/50">
                    {mem.type === "video" ? (
                      <video
                        src={mem.src}
                        poster={mem.poster}
                        aria-label={mem.caption}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <img
                        src={mem.src}
                        alt={mem.caption}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                  <p className="px-4 py-3 font-heading text-sm md:text-base text-foreground italic">
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
