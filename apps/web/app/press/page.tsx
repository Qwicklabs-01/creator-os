import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { Download } from "lucide-react";

export const metadata = {
  title: "Press Kit | CreatorOS",
};

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Press Kit</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Brand assets, logos, and guidelines for CreatorOS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 border border-border flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CreatorOS Logo</h3>
              <p className="text-text-secondary text-sm mb-6">SVG, PNG, and AI formats in dark and light variations.</p>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border hover:bg-surface-light hover:text-primary transition-all font-semibold text-sm">
                <Download className="w-4 h-4" /> Download Logo Pack
              </button>
            </div>

            <div className="glass rounded-3xl p-8 border border-border flex flex-col items-center justify-center text-center">
              <div className="w-full h-20 rounded-2xl bg-[#0a0a0a] border border-border/50 flex items-center justify-center mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <span className="text-2xl font-bold z-10">Creator<span className="gradient-text-primary">OS</span></span>
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Wordmark</h3>
              <p className="text-text-secondary text-sm mb-6">Official wordmark and typography guidelines.</p>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface border border-border hover:bg-surface-light hover:text-primary transition-all font-semibold text-sm">
                <Download className="w-4 h-4" /> Download Wordmark
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
