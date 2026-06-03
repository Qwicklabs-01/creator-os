import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { Search } from "lucide-react";

export const metadata = {
  title: "Integrations | CreatorOS",
};

export default function IntegrationsPage() {
  const integrations = [
    { name: "Twitter / X", category: "Social", icon: "🐦", status: "Available" },
    { name: "LinkedIn", category: "Social", icon: "💼", status: "Available" },
    { name: "WordPress", category: "CMS", icon: "📝", status: "Available" },
    { name: "YouTube", category: "Social", icon: "📺", status: "Beta" },
    { name: "Shopify", category: "E-Commerce", icon: "🛍️", status: "Coming Soon" },
    { name: "HubSpot", category: "CRM", icon: "🔄", status: "Coming Soon" },
    { name: "Webflow", category: "CMS", icon: "🌐", status: "Available" },
    { name: "Mailchimp", category: "Email", icon: "📧", status: "Beta" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Integrations Directory</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">Connect CreatorOS to your favorite platforms to automate publishing and gather performance analytics seamlessly.</p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search integrations..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface border border-border outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((app, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors flex flex-col items-center text-center cursor-pointer group">
                <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{app.name}</h3>
                <p className="text-sm text-text-secondary mb-4">{app.category}</p>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  app.status === 'Available' ? 'bg-success/10 text-success border border-success/20' :
                  app.status === 'Beta' ? 'bg-warning/10 text-warning border border-warning/20' :
                  'bg-surface border border-border text-muted'
                }`}>
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
