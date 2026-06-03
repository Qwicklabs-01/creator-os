import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";

export const metadata = {
  title: "Blog | CreatorOS",
};

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Autonomous Marketing",
      category: "Thought Leadership",
      date: "Oct 12, 2026",
      image: "from-primary/20 to-secondary/20",
    },
    {
      title: "How to Fine-Tune LLaMA 3 for Your Brand Voice",
      category: "Engineering",
      date: "Oct 5, 2026",
      image: "from-accent/20 to-primary/20",
    },
    {
      title: "Case Study: Scaling Content 10x with CreatorOS",
      category: "Case Study",
      date: "Sep 28, 2026",
      image: "from-secondary/20 to-accent/20",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">CreatorOS Blog</h1>
            <p className="text-lg text-text-secondary">Insights, tutorials, and engineering deep-dives.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`h-48 rounded-3xl bg-gradient-to-br ${post.image} mb-6 border border-border group-hover:border-primary/50 transition-colors`} />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-md">{post.category}</span>
                  <span className="text-xs text-text-secondary">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
