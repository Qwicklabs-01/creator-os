import Image from "next/image";

export const metadata = {
  title: "About Us | CreatorOS",
  description: "Learn about the mission and team behind CreatorOS.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 gradient-bg-hero grid-pattern relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Building the Future of <span className="gradient-text">Content Creation</span>
          </h1>
          <p className="text-lg text-muted-dark leading-relaxed">
            We are on a mission to democratize enterprise-grade AI marketing. CreatorOS is an open-source platform designed to be your autonomous content agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-text-secondary leading-relaxed">
              CreatorOS was born out of frustration with fragmented marketing tools and expensive AI subscriptions. We realized that creators and small businesses needed a unified, self-hosted solution that could leverage the power of open-source models without sacrificing quality.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Today, we're building a vibrant open-source community dedicated to creating the most powerful AI marketing operating system in the world.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden glass border border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-white/50 text-2xl font-bold">CreatorOS Team</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Values</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">The principles that guide everything we build.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Open Source First",
              desc: "We believe the future of AI should be transparent, accessible, and community-driven."
            },
            {
              title: "Privacy by Design",
              desc: "Your data is yours. CreatorOS runs locally, ensuring your brand memory and data never leave your control."
            },
            {
              title: "Uncompromising Quality",
              desc: "From the UI design to the AI output, we hold ourselves to the highest enterprise standards."
            }
          ].map((value, i) => (
            <div key={i} className="glass p-8 rounded-2xl border border-border/50 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-text-secondary">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
