import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";

export const metadata = {
  title: "Privacy Policy | CreatorOS",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-text-secondary mb-12">Last updated: October 1, 2026</p>

          <div className="prose prose-invert prose-p:text-text-secondary prose-h2:text-text max-w-none">
            <h2>1. Introduction</h2>
            <p>Welcome to CreatorOS. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

            <h2>2. The Data We Collect About You</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2>3. Local Data Storage</h2>
            <p>Because CreatorOS is an open-source platform that can be self-hosted, the data you process through your own instance remains on your infrastructure. If you use our hosted cloud service, we employ enterprise-grade encryption and strictly isolate tenant data.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
