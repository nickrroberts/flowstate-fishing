import { Badge } from "./ui/badge";
import { Quote } from "lucide-react";
import Frame2_14_134 from "../imports/Frame2-14-134";

export function About() {
  return (
    <section id="about" className="about-section py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Flow State Explanation */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-6 text-xs font-medium px-4 py-2 border-white text-white bg-transparent natural-shadow font-sans">
            Understanding Flow State
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white uppercase">
            The Flow State
          </h2>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed font-serif text-white/90">
              It's the perfect intersection of skill and challenge. A sense of absolute control. 
              A merging of action and intent where time seems to stop.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-serif text-white/80">
              It's a mental condition of complete immersion, focus, and enjoyment. 
              Where every movement becomes intuitive and every cast flows effortlessly.
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-4 text-sand-beige">
                <div className="w-12 h-px bg-current"></div>
                <p className="font-serif text-lg italic font-medium">
                  We can help you find your flow.
                </p>
                <div className="w-12 h-px bg-current"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tanner Hall Personal Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[600px] rounded-lg shadow-2xl border-2 border-white/20 overflow-hidden relative natural-shadow">
              <div className="w-full h-full frame-fill">
                <Frame2_14_134 />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 text-white bg-charcoal/80 p-4 rounded-lg backdrop-blur-sm natural-shadow">
              <p className="font-display text-xl font-bold mb-1">Tanner Hall</p>
              <p className="text-sm font-medium opacity-90 font-sans">Master Fly Fishing Guide</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-xs font-medium px-4 py-2 border-white text-white bg-transparent natural-shadow font-sans">
                Your Guide
              </Badge>
              <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-tight text-white">
                Mastery Through
                <span className="block italic text-sand-beige">Dedication</span>
              </h3>
            </div>

            <div className="space-y-6 font-serif text-lg leading-relaxed text-white/90">
              <p>
                For over a decade, I've dedicated my life to mastering the art of fly fishing. 
                What started as a childhood passion has evolved into a profound understanding 
                of water, weather, and the delicate dance between angler and nature.
              </p>
              <p>
                My approach isn't just about catching fish—it's about finding that perfect 
                moment where skill meets intuition, where the noise of everyday life fades 
                away, and you discover what it truly means to be in flow.
              </p>
              <p>
                Whether you're taking your first cast or refining techniques developed over years, 
                I'll guide you toward that transcendent state where fishing becomes meditation, 
                and every moment on the water is exactly where you're meant to be.
              </p>
            </div>

            <div className="pt-4">
              <blockquote className="relative bg-sand-beige p-6 rounded-lg border-l-4 border-coral-pink natural-shadow">
                <Quote className="w-8 h-8 text-coral-pink/30 absolute -top-2 -left-2" />
                <p className="font-serif text-xl italic text-charcoal leading-relaxed pl-6">
                  "The river teaches patience, presence, and the art of letting go. 
                  Every cast is a conversation with nature."
                </p>
                <footer className="mt-4 pl-6">
                  <cite className="font-medium text-sm text-creek-stone font-sans">— Tanner Hall</cite>
                </footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-white/30">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-sand-beige mb-2">12+</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider font-sans">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-sand-beige mb-2">500+</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider font-sans">Guided Trips</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-sand-beige mb-2">25+</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wider font-sans">River Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}