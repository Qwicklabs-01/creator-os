"use client";

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { ImageIcon, Sparkles, Download, Loader2, ImagePlus } from "lucide-react";

export default function ImagesPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const response = await fetch("/api/ai/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, aspectRatio }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      setGeneratedImage(data.url);
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
          <h1 className="text-2xl font-bold tracking-tight mb-1">Image Synthesis</h1>
          <p className="text-text-secondary">
            Create stunning visuals, product shots, and social graphics via AI.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Controls */}
        <Card className="p-6 bg-surface border-border flex flex-col shadow-lg relative overflow-hidden group lg:col-span-5 h-fit">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
              <ImageIcon className="w-4 h-4 text-secondary" />
            </div>
            <h2 className="text-lg font-semibold">Image Studio</h2>
          </div>

          <form onSubmit={handleGenerate} className="flex flex-col gap-6 relative z-10">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Prompt</label>
              <textarea
                className="w-full p-4 rounded-xl bg-background border border-border text-sm resize-none focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all min-h-[150px]"
                placeholder="E.g., A cinematic product shot of a luxury watch resting on dark volcanic rock, dramatic lighting, 8k resolution..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Aspect Ratio</label>
              <div className="grid grid-cols-3 gap-3">
                {['1:1', '16:9', '9:16'].map((ratio) => (
                  <button
                    key={ratio}
                    type="button"
                    onClick={() => setAspectRatio(ratio)}
                    className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                      aspectRatio === ratio 
                        ? 'border-secondary bg-secondary/10 text-secondary' 
                        : 'border-border bg-background hover:bg-border/50 text-text-secondary'
                    }`}
                  >
                    {ratio === '1:1' ? 'Square' : ratio === '16:9' ? 'Landscape' : 'Portrait'}
                    <span className="block text-xs opacity-60 mt-1">{ratio}</span>
                  </button>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isGenerating || !prompt.trim()}
              className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-secondary to-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Rendering Image...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Image
                </>
              )}
            </button>
          </form>
        </Card>

        {/* Right Side: Output Gallery */}
        <Card className="p-6 bg-surface border-border flex flex-col shadow-lg relative overflow-hidden group lg:col-span-7 min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-500" />
              </div>
              <h2 className="text-lg font-semibold">Canvas</h2>
            </div>
            
            {generatedImage && (
              <a 
                href={generatedImage}
                download="generated-image.webp"
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
            
            {!generatedImage && !isGenerating && !error && (
              <div className="flex flex-col items-center justify-center text-muted-dark space-y-4 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-border/50 flex items-center justify-center mb-2">
                  <ImagePlus className="w-8 h-8 opacity-40" />
                </div>
                <p className="text-sm max-w-[250px]">Your masterpiece awaits. Enter a prompt to start generating.</p>
              </div>
            )}

            {isGenerating && (
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-t-2 border-secondary animate-spin"></div>
                  <div className="absolute inset-2 rounded-full border-r-2 border-blue-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary animate-pulse" />
                  </div>
                </div>
                <p className="text-sm font-medium animate-pulse bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
                  Synthesizing pixels...
                </p>
              </div>
            )}

            {generatedImage && !isGenerating && (
              <img 
                src={generatedImage} 
                alt={prompt} 
                className="w-full h-full object-contain animate-in zoom-in duration-500"
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
