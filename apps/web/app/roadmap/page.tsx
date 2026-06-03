import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { CheckCircle2, Clock, Circle } from "lucide-react";

export const metadata = {
  title: "Roadmap | CreatorOS",
};

export default function RoadmapPage() {
  const roadmap = [
    {
      quarter: "Q3 2026",
      status: "completed",
      items: ["Open Source Release", "Local LLM Support", "Vector Memory MVP", "Next.js Dashboard Integration"]
    },
    {
      quarter: "Q4 2026",
      status: "in-progress",
      items: ["Enterprise SSO", "Multi-modal AI Video Generation", "Advanced Campaign Analytics", "Custom Brand Voice Training"]
    },
    {
      quarter: "Q1 2027",
      status: "planned",
      items: ["Autonomous Agent Workflows", "Social Media Auto-Publishing", "Plugin Ecosystem Marketplace", "CreatorOS CLI"]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Product Roadmap</h1>
            <p className="text-lg text-text-secondary">See what we've shipped and what's coming next for CreatorOS.</p>
          </div>

          <div className="space-y-12">
            {roadmap.map((phase, idx) => (
              <div key={idx} className="glass rounded-3xl p-8 border border-border flex flex-col md:flex-row gap-8">
                <div className="md:w-48 shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    {phase.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-success" />}
                    {phase.status === 'in-progress' && <Clock className="w-5 h-5 text-warning" />}
                    {phase.status === 'planned' && <Circle className="w-5 h-5 text-muted" />}
                    <h2 className="text-xl font-bold">{phase.quarter}</h2>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full bg-surface border border-border inline-block ${phase.status === 'completed' ? 'text-success' : phase.status === 'in-progress' ? 'text-warning' : 'text-muted'}`}>
                    {phase.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phase.items.map((item, i) => (
                    <div key={i} className="bg-surface/50 p-4 rounded-xl border border-border/50 flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${phase.status === 'completed' ? 'bg-success' : phase.status === 'in-progress' ? 'bg-warning' : 'bg-muted'}`} />
                      <span className="font-medium text-text-secondary">{item}</span>
                    </div>
                  ))}
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
