import { Navbar } from "../components/landing/navbar";
import { Footer } from "../components/landing/footer";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Careers | CreatorOS",
};

export default function CareersPage() {
  const jobs = [
    { title: "Senior AI Engineer", department: "Engineering", location: "Remote (US/EU)" },
    { title: "Full Stack Developer", department: "Engineering", location: "San Francisco, CA or Remote" },
    { title: "Developer Advocate", department: "Community", location: "Remote" },
    { title: "Product Designer", department: "Design", location: "Remote" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Join Our Team</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Help us build the open-source marketing operating system of the future.
            </p>
          </div>

          <div className="glass rounded-3xl border border-border p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-surface/50 border border-border hover:border-primary/50 transition-colors group cursor-pointer">
                  <div>
                    <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-text-secondary mt-2">
                      <span>{job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="flex items-center gap-2 text-sm font-semibold text-text group-hover:text-primary transition-colors">
                      Apply Now <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
