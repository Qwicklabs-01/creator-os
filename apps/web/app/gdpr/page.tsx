import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";

export const metadata = {
  title: "GDPR Compliance | CreatorOS",
};

export default function GDPRPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight mb-4">GDPR Compliance</h1>
          <p className="text-text-secondary mb-12">Last updated: October 1, 2026</p>

          <div className="prose prose-invert prose-p:text-text-secondary prose-h2:text-text max-w-none">
            <h2>Our Commitment to Data Protection</h2>
            <p>CreatorOS is committed to protecting the privacy and security of our users' personal data. We are fully compliant with the General Data Protection Regulation (GDPR) and other applicable data protection laws.</p>

            <h2>Your Rights Under GDPR</h2>
            <p>Under the GDPR, you have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can request that we delete your personal data under certain circumstances.</li>
              <li><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your personal data under certain circumstances.</li>
              <li><strong>Right to Data Portability:</strong> You can request a copy of your personal data in a structured, commonly used, and machine-readable format.</li>
            </ul>

            <h2>Self-Hosting and Data Sovereignty</h2>
            <p>One of the core benefits of CreatorOS is the ability to self-host the platform. When you self-host CreatorOS on your own infrastructure, you retain complete control over your data, making GDPR compliance significantly easier to manage for your own organization and users.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
