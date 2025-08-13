import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Instagram } from "lucide-react";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "casting", name: "Casting Techniques" },
    { id: "waters", name: "Waters" },
    { id: "catches", name: "Catches" },
    { id: "students", name: "Students" }
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Perfect fly casting technique demonstration",
      category: "casting",
      title: "Perfect Casting Form"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Golden hour fly fishing on pristine mountain stream",
      category: "waters",
      title: "Mountain Stream Magic"
    },
    {
      src: "https://images.unsplash.com/photo-1580366853398-3a2e6c00b451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beautiful brown trout caught on dry fly",
      category: "catches",
      title: "Wild Brown Trout"
    },
    {
      src: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Student learning proper fly casting technique",
      category: "students",
      title: "Learning Flow State"
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sunrise reflection on calm river water",
      category: "waters",
      title: "Dawn Reflections"
    },
    {
      src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Native rainbow trout in crystal clear water",
      category: "catches",
      title: "Native Rainbow"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Advanced casting instruction in action",
      category: "casting",
      title: "Advanced Techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Happy student with their first fly-caught fish",
      category: "students",
      title: "First Success"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="gallery-section py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-6 text-xs font-medium px-4 py-2 border-white text-white bg-sage-green/20 texture-grain">
            Visual Stories
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white">
            Moments in
            <span className="block italic text-warm-beige">Flow</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-serif">
            Every trip is unique, every cast tells a story. Witness the magic that happens 
            when skill meets serenity on the water.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`font-medium texture-paper ${
                selectedCategory === category.id 
                  ? 'bg-burnt-orange hover:bg-dark-red text-white' 
                  : 'border-white text-white hover:bg-white hover:text-sage-green'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl aspect-square bg-olive-brown border-2 border-light-brown">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-forest-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-medium mb-1 text-warm-beige">{image.title}</h4>
                <p className="text-xs text-white/80 uppercase tracking-wider">{categories.find(c => c.id === image.category)?.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="font-display text-2xl md:text-3xl mb-4 text-white">
              Follow the Journey
            </h3>
            <p className="text-lg font-serif text-white/90 leading-relaxed">
              See daily updates from the water, technique tips, and behind-the-scenes moments 
              from our fly fishing adventures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="font-medium border-white text-white hover:bg-white/10 texture-linen">
              <Instagram className="w-5 h-5 mr-2" />
              @flowstatefishingllc
            </Button>
            <Button variant="ghost" size="lg" className="font-medium text-white/80 hover:text-white hover:bg-white/5">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}