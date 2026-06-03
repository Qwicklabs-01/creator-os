import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { MessageSquare, Github, Twitter, Users } from "lucide-react";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="w-full max-w-4xl z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-surface border border-border text-sm text-text font-medium mb-6">
            Join 10,000+ Creators
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text mb-6">
            Welcome to the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              CreatorOS Community
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-16">
            Connect with other founders, marketers, and developers building the future of autonomous content generation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <a href="#" className="glass rounded-3xl p-8 border border-border text-left hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-[#5865F2]" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">Discord Server</h3>
              <p className="text-text-secondary mb-6">Chat in real-time with the core team, get support, and share your AI generated campaigns.</p>
              <div className="text-sm font-semibold text-primary flex items-center gap-2">
                Join Discord <span>→</span>
              </div>
            </a>

            <a href="#" className="glass rounded-3xl p-8 border border-border text-left hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mb-6">
                <Github className="w-7 h-7 text-text" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">GitHub Discussions</h3>
              <p className="text-text-secondary mb-6">Suggest features, report bugs, and contribute to the open-source CreatorOS ecosystem.</p>
              <div className="text-sm font-semibold text-primary flex items-center gap-2">
                View Discussions <span>→</span>
              </div>
            </a>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
