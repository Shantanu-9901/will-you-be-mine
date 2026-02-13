import FloatingHearts from "@/components/FloatingHearts";
import ValentineQuestion from "@/components/ValentineQuestion";
import photo1 from "@/assets/photo-1.jpeg";
import photo2 from "@/assets/photo-2.jpeg";
import photo3 from "@/assets/photo-3.jpeg";
import photo4 from "@/assets/photo-4.jpeg";
import photo5 from "@/assets/photo-5.jpeg";
import photo6 from "@/assets/photo-6.jpeg";
import photo7 from "@/assets/photo-7.jpeg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];

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
              src={photo1}
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

        {/* Photo Gallery */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center max-w-3xl">
          {photos.slice(1).map((photo, i) => (
            <div
              key={i}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-romantic/30 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo}
                alt={`Our memory ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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
