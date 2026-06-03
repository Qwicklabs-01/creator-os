import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { PlayCircle } from "lucide-react";

export const metadata = {
  title: "Tutorials | CreatorOS",
};

export default function TutorialsPage() {
  const tutorials = [
    { title: "Getting Started with CreatorOS", duration: "5:30" },
    { title: "Setting up a Local Vector Database", duration: "12:15" },
    { title: "Connecting Social Media Accounts", duration: "3:45" },
    { title: "Creating Your First Multi-Platform Campaign", duration: "8:20" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Video Tutorials</h1>
            <p className="text-lg text-text-secondary">Learn how to master CreatorOS step by step.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tutorials.map((video, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden border border-border group cursor-pointer hover:border-primary/50 transition-all">
                <div className="relative h-56 bg-surface flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary">Lesson {i + 1}</span>
                    <span className="text-xs text-text-secondary">{video.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
