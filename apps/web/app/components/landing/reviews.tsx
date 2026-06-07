"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const initialReviews = [
  {
    name: "Sarah Jenkins",
    handle: "@sarahcreates",
    role: "Content Creator",
    text: "CreatorOS completely changed how I manage my workflow. The AI tools are intuitive and save me hours every single week.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    handle: "@davidchen_dev",
    role: "Tech YouTuber",
    text: "I've tried every platform out there, but this is the only one that truly understands what modern creators need to scale their business.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Elena Rodriguez",
    handle: "@elenavlogs",
    role: "Lifestyle Vlogger",
    text: "The analytics are mind-blowing. I finally understand my audience demographics and can tailor my content perfectly. 10/10 recommend!",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Marcus Johnson",
    handle: "@marcusj",
    role: "Podcast Host",
    text: "Integration was seamless. I moved my entire 5-person team over to CreatorOS in one weekend and we haven't looked back since.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Aisha Patel",
    handle: "@aishadesigns",
    role: "Digital Artist",
    text: "The community features alone are worth the price. Being able to connect directly with my top supporters has boosted my revenue significantly.",
    avatar: "https://i.pravatar.cc/150?u=aisha"
  },
  {
    name: "Tom Wilson",
    handle: "@tomwilson_music",
    role: "Indie Musician",
    text: "Finally, a platform that doesn't feel clunky. The dark mode design is beautiful and the performance is incredibly snappy.",
    avatar: "https://i.pravatar.cc/150?u=tom"
  }
];

export function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', handle: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    
    setReviews([
      {
        name: formData.name,
        handle: formData.handle.startsWith('@') ? formData.handle : `@${formData.handle || formData.name.toLowerCase().replace(/\\s+/g, '')}`,
        role: "Community Member",
        text: formData.text,
        avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(formData.name)}`
      },
      ...reviews
    ]);
    
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: '', handle: '', text: '' });
    }, 3000);
  };

  return (
    <section className="relative py-24 overflow-hidden" id="reviews">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary-light text-sm font-medium mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Wall of Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Loved by <span className="gradient-text">creators</span> worldwide
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Don't just take our word for it. See what our community of over 2,500 active creators has to say about their experience.
          </p>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-2.5 rounded-xl gradient-primary text-white font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            {showForm ? "Cancel" : "Add Your Review"}
          </button>
        </motion.div>

        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 48 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="max-w-2xl mx-auto overflow-hidden"
            >
              <div className="glass p-8 rounded-2xl border-primary/30 shadow-xl shadow-primary/10 relative">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Review Submitted!</h3>
                    <p className="text-muted">Thank you for sharing your experience with CreatorOS.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-semibold mb-6">Share your experience</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-text-secondary">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-surface-lighter border border-border-light rounded-lg px-4 py-2.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-text-secondary">Handle (optional)</label>
                        <input 
                          type="text" 
                          value={formData.handle}
                          onChange={(e) => setFormData({...formData, handle: e.target.value})}
                          className="w-full bg-surface-lighter border border-border-light rounded-lg px-4 py-2.5 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="@janedoe"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-text-secondary">Your Review</label>
                      <textarea 
                        required
                        value={formData.text}
                        onChange={(e) => setFormData({...formData, text: e.target.value})}
                        className="w-full bg-surface-lighter border border-border-light rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors min-h-[120px] resize-y"
                        placeholder="Tell us what you love about CreatorOS..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3 rounded-xl gradient-primary text-white font-medium shadow-md shadow-primary/20 hover:opacity-90 transition-opacity mt-4"
                    >
                      Submit Review
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {reviews.map((review, i) => (
              <motion.div
                key={review.name + review.text.substring(0, 10)}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.3) }}
                layout
                className="glass p-8 rounded-2xl hover-card flex flex-col h-full"
              >
                <div className="flex items-center gap-1 mb-6 text-accent-light">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg text-text-secondary flex-grow mb-8 leading-relaxed">
                  "{review.text}"
                </blockquote>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border border-border-light object-cover bg-surface-lighter"
                  />
                  <div>
                    <div className="font-semibold text-text">{review.name}</div>
                    <div className="text-sm text-muted">{review.handle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
