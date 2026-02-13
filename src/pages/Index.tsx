import FloatingHearts from "@/components/FloatingHearts";
import ValentineQuestion from "@/components/ValentineQuestion";
import coupleHero from "@/assets/couple-hero.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      
      {/* Background glow */}
      <div className="fixed inset-0 bg-rose-glow pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Hero Image */}
        <div className="mb-8 animate-float-heart">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-romantic mx-auto">
            <img
              src={coupleHero}
              alt="Our love"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-8xl text-primary mb-2">
          Happy Valentine's Day
        </h1>
        <p className="text-rose-soft font-heading text-lg md:text-2xl italic mb-4">
          To the love of my life ❤️
        </p>
        <p className="text-muted-foreground text-sm md:text-base max-w-md text-center mb-12 leading-relaxed">
          Every moment with you feels like a dream I never want to wake up from. 
          You make my world brighter, warmer, and so much more beautiful.
        </p>

        {/* Photo placeholders for your pictures */}
        <div className="flex gap-6 mb-12 flex-wrap justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-2 border-primary/30 bg-card flex items-center justify-center text-muted-foreground text-xs text-center p-2 shadow-romantic/30">
            📸<br/>Your photo here
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-2 border-primary/30 bg-card flex items-center justify-center text-muted-foreground text-xs text-center p-2 shadow-romantic/30">
            📸<br/>Her photo here
          </div>
        </div>

        {/* The Question */}
        <div className="text-center">
          <ValentineQuestion />
        </div>

        {/* Footer */}
        <p className="mt-16 text-muted-foreground text-xs font-heading">
          Made with all my ❤️ for you
        </p>
      </div>
    </div>
  );
};

export default Index;
