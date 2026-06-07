"use client";

import { useState } from "react";
import { useCompletion } from "@ai-sdk/react";
import { Card } from "../../components/ui/card";
import { PenTool, Sparkles, Copy, Check, RefreshCw } from "lucide-react";

export default function ContentPage() {
  const { completion, input, handleInputChange, handleSubmit, isLoading, error } = useCompletion({
    api: "/api/ai/content",
  });
  
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!completion) return;
    navigator.clipboard.writeText(completion);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">AI Content Creation</h1>
          <p className="text-text-secondary">
            Generate captions, scripts, and hooks using AI.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Input */}
        <Card className="p-6 bg-surface border-border flex flex-col h-full shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <PenTool className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Write a prompt</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col relative z-10">
            <textarea
              className="flex-1 w-full p-4 rounded-xl bg-background border border-border text-sm resize-none focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all min-h-[300px] mb-4"
              placeholder="E.g., Write a 3-part Twitter thread about the future of AI agents in software development. Make it engaging and punchy."
              value={input}
              onChange={handleInputChange}
            />

            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gradient-primary text-white font-semibold text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Content
                </>
              )}
            </button>
          </form>
        </Card>

        {/* Right Side: Output */}
        <Card className="p-6 bg-surface border-border flex flex-col h-full shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-bl from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="text-lg font-semibold">Generated Output</h2>
            </div>
            <button 
              onClick={copyToClipboard}
              disabled={!completion}
              className="p-2 rounded-lg hover:bg-white/5 text-muted hover:text-text transition-colors disabled:opacity-30"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex-1 p-5 rounded-xl bg-background/50 border border-border/50 min-h-[300px] overflow-y-auto relative z-10 shadow-inner">
            {error && (
              <div className="p-4 bg-error/10 border border-error/20 rounded-lg text-error text-sm mb-4">
                <strong>Error:</strong> {error.message}
                <br/><br/>
                <span className="text-xs opacity-80">
                  (Make sure you have added your GOOGLE_GENERATIVE_AI_API_KEY in Vercel environment variables)
                </span>
              </div>
            )}
            
            {!completion && !isLoading && !error && (
              <div className="h-full flex flex-col items-center justify-center text-muted-dark space-y-4">
                <Sparkles className="w-10 h-10 opacity-20" />
                <p className="text-sm">Your AI-generated content will stream here.</p>
              </div>
            )}

            {completion && (
              <div className="prose prose-invert max-w-none text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
                {completion}
                {isLoading && (
                  <span className="inline-block ml-1 w-2 h-4 bg-primary animate-pulse align-middle" />
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
