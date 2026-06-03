import { Card } from "../../components/ui/card";
import { Image as ImageIcon, Settings, Sparkles } from "lucide-react";

export default function ImagesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">Image Synthesis</h1>
          <p className="text-text-secondary">
            Create stunning visuals, product shots, and social graphics via Stable Diffusion.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] opacity-50 cursor-not-allowed">
          <Sparkles className="w-4 h-4" />
          Generate Image
        </button>
      </div>

      <Card className="flex flex-col items-center justify-center py-24 text-center border-dashed border-2 bg-surface/30">
        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
          <Settings className="w-8 h-8 text-secondary animate-[spin_4s_linear_infinite]" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Connecting GPU Cluster...</h2>
        <p className="text-muted max-w-md">
          We are currently setting up the Stable Diffusion endpoints. The image generation studio will be available in the next update.
        </p>
      </Card>
    </div>
  );
}
