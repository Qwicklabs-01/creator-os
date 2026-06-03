import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { Terminal } from "lucide-react";

export const metadata = {
  title: "API Reference | CreatorOS",
};

export default function ApiReferencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative flex justify-center">
        <div className="max-w-5xl w-full z-10">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">API Reference</h1>
            <p className="text-lg text-text-secondary">Integrate CreatorOS directly into your own applications with our REST API.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1 hidden md:block">
              <nav className="sticky top-32 space-y-6">
                <div>
                  <h4 className="font-bold mb-3 text-text">Authentication</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="hover:text-primary cursor-pointer transition-colors">API Keys</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">OAuth2</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-text">Endpoints</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="hover:text-primary cursor-pointer transition-colors text-primary font-medium">Create Campaign</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">List Brands</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Generate Content</li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="md:col-span-3 space-y-12">
              <div className="glass p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded bg-success/20 text-success text-sm font-bold">POST</span>
                  <h2 className="text-xl font-mono text-text">/v1/campaigns</h2>
                </div>
                <p className="text-text-secondary mb-6">Creates a new AI generation campaign under a specific brand.</p>
                
                <h3 className="font-bold mb-3">Request Body</h3>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-border/50 mb-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-text-secondary">
                    <code>{`{
  "brandId": "br_123456789",
  "name": "Summer Launch Q3",
  "type": "social_media",
  "instructions": "Generate 3 casual tweets about the new sunglasses line."
}`}</code>
                  </pre>
                </div>

                <h3 className="font-bold mb-3">Response</h3>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-border/50 overflow-x-auto">
                  <pre className="text-sm font-mono text-success">
                    <code>{`{
  "id": "cmp_987654321",
  "status": "processing",
  "createdAt": "2026-10-15T12:00:00Z"
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
