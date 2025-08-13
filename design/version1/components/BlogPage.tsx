import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogPost = {
  title: "Reading the Water: Understanding Current Patterns for Better Fly Fishing",
  author: "Tanner Hall",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Technique",
  heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&crop=center",
  content: `
    <p>There's an old saying among fly fishers: "Reading water is 80% of successful fishing." After more than a decade guiding on New Mexico's diverse waters, I can tell you this isn't just folklore—it's fundamental truth.</p>

    <p>Understanding how water moves, where it slows, where it accelerates, and where it creates the perfect conditions for trout is perhaps the most important skill you can develop. Today, I want to share the techniques that have helped hundreds of my clients find their flow state on the water.</p>

    <h2>The Language of Moving Water</h2>

    <p>Every stream, river, and creek speaks its own language through current patterns. Learning to read these patterns is like developing fluency in a foreign tongue—at first, everything seems chaotic, but gradually, you begin to recognize the vocabulary.</p>

    <h3>Primary Currents</h3>

    <p>The main flow of any water body creates what we call the primary current. This is usually the fastest, deepest channel where water has carved its path over centuries. While it might seem logical that fish would avoid these turbulent areas, you'd be surprised how often large trout position themselves along the edges of primary currents.</p>

    <p>Why? Because these edges are highways for food. Insects, small fish, and organic matter get swept along in the current, and smart trout position themselves where they can dart out to grab a meal without fighting the full force of the flow.</p>

    <blockquote>
      "The best fishing is often found not in the obvious spots, but in the transition zones where fast water meets slow, where deep meets shallow, where the current creates opportunity."
    </blockquote>

    <h3>Secondary Currents and Eddies</h3>

    <p>More interesting than primary currents are the secondary flows created by obstacles. When water hits a boulder, fallen log, or bank undercut, it creates complex patterns of flow that savvy anglers learn to exploit.</p>

    <p>Behind obstacles, you'll often find reverse currents—areas where water actually flows upstream in a circular pattern. These eddies are gold mines for fly fishing because they collect food and provide fish with a low-energy feeding station.</p>

    <h2>Pocket Water Strategy</h2>

    <p>In the high mountain streams of New Mexico, much of our fishing happens in what we call "pocket water"—small pools and holding areas created by boulders and natural structure. Each pocket is like a miniature ecosystem with its own current patterns.</p>

    <p>The key to fishing pocket water effectively is understanding that each pocket has three zones:</p>

    <ol>
      <li><strong>The entry point</strong> where water flows in—often holding aggressive fish</li>
      <li><strong>The collection zone</strong> where debris and food settle—perfect for cautious feeders</li>
      <li><strong>The exit</strong> where water accelerates out—surprisingly productive for quick strikes</li>
    </ol>

    <h2>Seasonal Changes in Water Reading</h2>

    <p>What makes water reading truly challenging is that these patterns change with seasons, weather, and water levels. A deep pool that held fish all summer might become a rushing torrent after snowmelt, while a riffle that seemed lifeless in high water might become prime feeding water when flows drop.</p>

    <p>This is why I always tell my clients: there's no substitute for time on the water. The more you observe, the more patterns you'll recognize, and the more intuitive your water reading becomes.</p>

    <h2>Putting It All Together</h2>

    <p>Successful water reading isn't just about understanding current patterns—it's about synthesizing that knowledge with what you know about fish behavior, insect life, and seasonal patterns. It's about developing the patience to observe before you cast and the wisdom to change your approach when the water tells you something different.</p>

    <p>The next time you're on the water, take fifteen minutes before you make your first cast. Watch how the water moves. Notice where bubbles collect, where the surface shows different textures, where the current creates opportunities. This investment in observation will pay dividends throughout your day.</p>

    <p>Remember, every river has secrets, and the best way to learn them is to listen to what the water is telling you. In time, reading water becomes as natural as reading words on a page—and just as rewarding.</p>
  `
};

const relatedPosts = [
  {
    id: 2,
    title: "Seasonal Fly Selection: What Works When on New Mexico Waters",
    category: "Flies & Patterns",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "The Mental Game: Finding Flow State on Challenging Fishing Days",
    category: "Mindset", 
    image: "https://images.unsplash.com/photo-1586041828039-a6861b0a8f88?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Winter Fly Fishing: Adapting Your Approach for Cold Weather Success",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center"
  }
];

interface BlogPageProps {
  onBackClick: () => void;
}

export function BlogPage({ onBackClick }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={blogPost.heroImage}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={onBackClick}
            className="bg-white/90 hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Article Header */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-white/90 text-foreground">
              {blogPost.category}
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="max-w-3xl">
              {/* Share Buttons */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg prose-stone max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:mb-6
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 
                  prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:my-8
                  prose-ol:font-serif prose-ol:text-lg prose-ol:text-muted-foreground
                  prose-li:mb-2 prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Author Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Tanner Hall</CardTitle>
                      <p className="text-sm text-muted-foreground">Master Fly Fishing Guide</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-serif text-muted-foreground leading-relaxed">
                    With over 12 years of guiding experience across New Mexico's diverse waters, 
                    Tanner specializes in helping anglers find their flow state through mindful fishing techniques.
                  </p>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-serif text-muted-foreground">
                    Get the latest fishing reports and technique articles delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-md border border-border bg-background"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20 border-t border-border pt-16">
          <h2 className="font-display text-3xl mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 bg-white/90 text-foreground"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}