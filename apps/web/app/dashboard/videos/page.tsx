import { Card } from "../../components/ui/card";
import { Video, Settings, Play } from "lucide-react";

export default function VideosPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">Video Generation</h1>
          <p className="text-text-secondary">
            Produce short-form videos automatically from text prompts and scripts.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)] opacity-50 cursor-not-allowed">
          <Play className="w-4 h-4" />
          Create Video
        </button>
      </div>

      <Card className="flex flex-col items-center justify-center py-24 text-center border-dashed border-2 bg-surface/30">
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
          <Settings className="w-8 h-8 text-accent animate-[spin_4s_linear_infinite]" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Configuring Rendering Engine...</h2>
        <p className="text-muted max-w-md">
          The Remotion rendering pipeline is currently being established. Soon you can generate Reels and TikToks instantly.
        </p>
      </Card>
    </div>
  );
}
