"use client";

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Video, Sparkles, Download, Loader2, PlaySquare } from "lucide-react";

export default function VideosPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);
    setGeneratedVideo(null);

    try {
      const response = await fetch("/api/ai/video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate video");
      }

      setGeneratedVideo(data.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">Video Generation</h1>
          <p className="text-text-secondary">
            Produce short-form AI videos automatically from text prompts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Controls */}
        <Card className="p-6 bg-surface border-border flex flex-col shadow-lg relative overflow-hidden group lg:col-span-5 h-fit">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Video className="w-4 h-4 text-accent" />
            </div>
            <h2 className="text-lg font-semibold">Video Studio</h2>
          </div>

          <form onSubmit={handleGenerate} className="flex flex-col gap-6 relative z-10">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Prompt</label>
              <textarea
                className="w-full p-4 rounded-xl bg-background border border-border text-sm resize-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all min-h-[150px]"
                placeholder="E.g., A cinematic drone shot flying over a futuristic neon city, high quality, 4k..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={isGenerating || !prompt.trim()}
              className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-accent to-orange-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Rendering Video... (May take 1-2 mins)
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Video
                </>
              )}
            </button>
          </form>
        </Card>

        {/* Right Side: Output Gallery */}
        <Card className="p-6 bg-surface border-border flex flex-col shadow-lg relative overflow-hidden group lg:col-span-7 min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>
              <h2 className="text-lg font-semibold">Video Player</h2>
            </div>
            
            {generatedVideo && (
              <a 
                href={generatedVideo}
                download="generated-video.mp4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center rounded-xl bg-background/50 border border-border/50 relative z-10 shadow-inner overflow-hidden">
            {error && (
              <div className="p-6 bg-error/10 border border-error/20 rounded-lg text-error text-sm max-w-md text-center m-4">
                <strong>Generation Error</strong>
                <p className="mt-2">{error}</p>
                <p className="text-xs opacity-80 mt-4">
                  (Make sure you have added your REPLICATE_API_TOKEN in Vercel environment variables)
                </p>
              </div>
            )}
            
            {!generatedVideo && !isGenerating && !error && (
              <div className="flex flex-col items-center justify-center text-muted-dark space-y-4 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-border/50 flex items-center justify-center mb-2">
                  <PlaySquare className="w-8 h-8 opacity-40" />
                </div>
                <p className="text-sm max-w-[250px]">Your cinematic scene will play here. Enter a prompt to start.</p>
              </div>
            )}

            {isGenerating && (
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-t-2 border-accent animate-spin"></div>
                  <div className="absolute inset-2 rounded-full border-r-2 border-orange-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-6 h-6 text-accent animate-pulse" />
                  </div>
                </div>
                <p className="text-sm font-medium animate-pulse bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                  Rendering frames...
                </p>
              </div>
            )}

            {generatedVideo && !isGenerating && (
              <video 
                src={generatedVideo} 
                controls 
                autoPlay 
                loop 
                className="w-full h-full object-contain animate-in zoom-in duration-500"
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
