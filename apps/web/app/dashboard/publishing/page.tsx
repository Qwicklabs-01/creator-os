import { Card } from "../../components/ui/card";
import { Share2, Settings, Send } from "lucide-react";

export default function PublishingPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">Multi-Platform Publishing</h1>
          <p className="text-text-secondary">
            Publish and schedule content to Instagram, TikTok, YouTube, and X from one place.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)] opacity-50 cursor-not-allowed">
          <Send className="w-4 h-4" />
          Schedule Post
        </button>
      </div>

      <Card className="flex flex-col items-center justify-center py-24 text-center border-dashed border-2 bg-surface/30">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
          <Settings className="w-8 h-8 text-primary animate-[spin_4s_linear_infinite]" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Connecting Social APIs...</h2>
        <p className="text-muted max-w-md">
          We are currently authorizing connections with Meta, ByteDance, and X. The publishing calendar will be unlocked shortly.
        </p>
      </Card>
    </div>
  );
}
