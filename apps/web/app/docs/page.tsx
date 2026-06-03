import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { Book, FileText, Code, Terminal, Zap, Shield } from "lucide-react";

export default function DocsPage() {
  const sections = [
    { title: "Getting Started", icon: Zap, links: ["Quickstart Guide", "Installation", "Environment Variables"] },
    { title: "Core Concepts", icon: Book, links: ["AI Agents", "Vector Database (Memory)", "Content Generation"] },
    { title: "API Reference", icon: Code, links: ["Authentication", "Campaigns API", "Brands API"] },
    { title: "Deployment", icon: Terminal, links: ["Docker Compose", "Vercel & Next.js", "Self-hosting"] },
    { title: "Guides", icon: FileText, links: ["Adding Custom Models", "Connecting Social Accounts"] },
    { title: "Security", icon: Shield, links: ["Data Privacy", "OAuth Config", "Roles & Permissions"] }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-5xl z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
              CreatorOS Documentation
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your autonomous AI content agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 border border-border-light hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-surface text-primary">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-border-light" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
