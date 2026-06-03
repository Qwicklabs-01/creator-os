import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function ToolPlaceholderPage({ params }: { params: { slug: string } }) {
  const toolName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen pt-32 pb-24 gradient-bg-hero grid-pattern relative flex items-center justify-center">
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <Link
          href="/#features"
          className="inline-flex items-center gap-2 text-muted hover:text-text mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Features
        </Link>
        
        <div className="glass p-12 rounded-3xl border border-border/50 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Construction className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{toolName}</span>
          </h1>
          <h2 className="text-xl font-medium text-text-secondary mb-6">
            Under Construction
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            We are currently building out this AI capability. Our engineers are working hard to bring this feature to life.
          </p>
          <Link
            href="/community"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          >
            Join Discord for Updates
          </Link>
        </div>
      </div>
    </div>
  );
}
