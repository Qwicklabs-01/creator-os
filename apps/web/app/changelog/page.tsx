import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";

export const metadata = {
  title: "Changelog | CreatorOS",
};

export default function ChangelogPage() {
  const updates = [
    {
      version: "v1.2.0",
      date: "October 15, 2026",
      tag: "Feature",
      title: "Introducing Vector Memory for Brands",
      content: "We've completely overhauled how brand context is managed. Now, every brand has a dedicated vector database namespace, allowing the AI to perfectly recall past campaigns, specific tone-of-voice guidelines, and historical performance data.",
    },
    {
      version: "v1.1.4",
      date: "October 2, 2026",
      tag: "Fix",
      title: "Local LLM Inference Optimizations",
      content: "Significantly reduced VRAM usage for local LLaMA 3 inference. Users running CreatorOS locally should see a 30% reduction in memory footprint without any loss in generation quality.",
    },
    {
      version: "v1.1.0",
      date: "September 18, 2026",
      tag: "Feature",
      title: "Multi-tenant Architecture Released",
      content: "CreatorOS now fully supports agency workflows with our new multi-tenant architecture. Manage isolated brands, invite team members, and assign specific roles and permissions per workspace.",
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto z-10 relative">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Changelog</h1>
            <p className="text-lg text-text-secondary">New updates and improvements to CreatorOS.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {updates.map((update, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold px-2 py-1 bg-surface rounded-md border border-border text-primary">{update.version}</span>
                    <time className="text-xs font-medium text-text-secondary">{update.date}</time>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{update.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{update.content}</p>
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
