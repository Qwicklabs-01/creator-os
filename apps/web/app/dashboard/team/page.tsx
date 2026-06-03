import { Card } from "../../components/ui/card";
import { Users, Settings, UserPlus } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">Team Collaboration</h1>
          <p className="text-text-secondary">
            Manage roles, real-time collaboration, and approval workflows.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-success text-white text-sm font-semibold hover:bg-success/90 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] opacity-50 cursor-not-allowed">
          <UserPlus className="w-4 h-4" />
          Invite Member
        </button>
      </div>

      <Card className="flex flex-col items-center justify-center py-24 text-center border-dashed border-2 bg-surface/30">
        <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mb-6">
          <Settings className="w-8 h-8 text-success animate-[spin_4s_linear_infinite]" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Setting up RBAC...</h2>
        <p className="text-muted max-w-md">
          Role-based access control and multiplayer functionality is being finalized. Soon you can invite your entire agency to collaborate.
        </p>
      </Card>
    </div>
  );
}
