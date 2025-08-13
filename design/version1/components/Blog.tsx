import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const featuredPosts = [
  {
    id: 1,
    title: "Reading the Water: Understanding Current Patterns for Better Fly Fishing",
    excerpt: "Learn to decode the language of moving water and discover where trout are most likely to hold. This comprehensive guide covers everything from pocket water to deep pools.",
    author: "Tanner Hall",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Seasonal Fly Selection: What Works When on New Mexico Waters",
    excerpt: "A detailed breakdown of fly patterns that consistently produce results throughout the fishing season in the high desert streams and alpine lakes of New Mexico.",
    author: "Tanner Hall",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Flies & Patterns",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "The Mental Game: Finding Flow State on Challenging Fishing Days",
    excerpt: "Sometimes the fish don't cooperate, but that doesn't mean you can't find your flow. Discover techniques for maintaining focus and enjoying the process regardless of results.",
    author: "Tanner Hall",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1586041828039-a6861b0a8f88?w=800&h=600&fit=crop&crop=center"
  }
];

const recentPosts = [
  {
    id: 4,
    title: "Winter Fly Fishing: Adapting Your Approach for Cold Weather Success",
    date: "November 28, 2024",
    category: "Seasonal"
  },
  {
    id: 5,
    title: "Gear Essentials: Building Your First Fly Fishing Kit",
    date: "November 22, 2024",
    category: "Gear"
  },
  {
    id: 6,
    title: "Conservation Ethics: Protecting the Waters We Love",
    date: "November 18, 2024",
    category: "Conservation"
  }
];

interface BlogProps {
  onPostClick: () => void;
  onBackClick: () => void;
}

export function Blog({ onPostClick, onBackClick }: BlogProps) {
  return (
    <div className="min-h-screen bg-muted/30 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBackClick}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-6 text-xs font-medium px-4 py-2">
            Insights & Stories
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Tales from
            <span className="block italic text-primary">The Water</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-serif">
            Techniques, stories, and insights from years spent reading water and understanding fish. 
            Discover the deeper aspects of fly fishing beyond the catch.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden" onClick={onPostClick}>
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-white/90 text-foreground"
                >
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-serif text-base leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto font-medium group/btn" onClick={(e) => { e.stopPropagation(); onPostClick(); }}>
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Posts & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl md:text-3xl mb-8">Recent Posts</h3>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer" onClick={onPostClick}>
                  <div className="flex items-start justify-between py-6 border-b border-border group-hover:border-primary/30 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <h4 className="font-display text-xl group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Weekly Water Reports
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 font-serif">
                  Get exclusive fishing reports, technique tips, and seasonal insights delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground border-0 focus:ring-2 focus:ring-white/50"
                  />
                  <Button variant="secondary" className="w-full">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground/60">
                  No spam, unsubscribe anytime. Privacy policy applies.
                </p>
              </CardContent>
            </Card>

            {/* Categories */}
            <div className="mt-8">
              <h4 className="font-display text-xl mb-4">Categories</h4>
              <div className="space-y-2">
                {["Technique", "Flies & Patterns", "Gear", "Seasonal", "Conservation", "Mindset"].map((category) => (
                  <Button key={category} variant="ghost" className="w-full justify-start p-2 h-auto">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto font-medium group" onClick={onPostClick}>
            View All Posts
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}