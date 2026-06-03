import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";

export const metadata = {
  title: "Cookie Policy | CreatorOS",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-3xl mx-auto z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-text-secondary mb-12">Last updated: October 1, 2026</p>

          <div className="prose prose-invert prose-p:text-text-secondary prose-h2:text-text max-w-none">
            <h2>What are cookies?</h2>
            <p>Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

            <h2>How CreatorOS uses cookies</h2>
            <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
            <ul>
              <li>To enable certain functions of the Service (e.g. Authentication/NextAuth sessions)</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
