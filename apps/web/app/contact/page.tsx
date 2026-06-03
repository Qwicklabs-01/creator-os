import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | CreatorOS",
  description: "Get in touch with the CreatorOS team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 gradient-bg-hero grid-pattern relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-dark leading-relaxed">
            Have questions about CreatorOS? Our team is here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "Secure via Proton Mail",
              contact: "hello@creator-os.com",
              href: "mailto:hello@creator-os.com",
            },
            {
              icon: MessageSquare,
              title: "Discord",
              description: "Join our active community",
              contact: "Join Server",
              href: "/community",
            },
            {
              icon: Phone,
              title: "Enterprise Sales",
              description: "Alerts via ntfy",
              contact: "+1 (800) 123-4567",
              href: "tel:+18001234567",
            },
            {
              icon: MapPin,
              title: "Headquarters",
              description: "San Francisco, CA",
              contact: "Get Directions",
            },
          ].map((item, i) => (
            <div key={i} className="glass p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary mb-6">{item.description}</p>
              {item.href ? (
                <Link href={item.href} className="text-primary-light hover:text-primary font-medium transition-colors">
                  {item.contact} →
                </Link>
              ) : (
                <span className="text-primary-light font-medium">{item.contact}</span>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mt-20 glass-strong p-8 md:p-12 rounded-3xl border border-border/50 shadow-2xl">
          <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 outline-none transition-all" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary/50 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full py-4 rounded-xl gradient-primary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
