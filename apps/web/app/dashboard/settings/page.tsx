import { createClient } from "../../../utils/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { User, Mail, Shield, Bell, CreditCard, Building2, Save } from "lucide-react";

export default async function SettingsPage() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div>
        <p className="text-text-secondary mt-1">
          Manage your account settings, organization, and billing preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Settings Navigation (Desktop) */}
        <div className="hidden md:block col-span-1 space-y-1 sticky top-24">
          {[
            { name: "Profile", icon: User, active: true },
            { name: "Organization", icon: Building2, active: false },
            { name: "Security", icon: Shield, active: false },
            { name: "Notifications", icon: Bell, active: false },
            { name: "Billing", icon: CreditCard, active: false },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-text-secondary hover:text-text hover:bg-surface"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="col-span-1 md:col-span-3 space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Update your personal information and avatar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Avatar Upload (Mock) */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-surface border border-border-light flex items-center justify-center overflow-hidden">
                  {session?.user?.user_metadata?.avatar_url ? (
                    <img src={session?.user?.user_metadata?.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-text-secondary" />
                  )}
                </div>
                <div>
                  <button className="px-4 py-2 rounded-xl bg-surface border border-border-light text-sm font-medium hover:bg-background transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-xs text-text-secondary mt-2">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      type="text" 
                      defaultValue={session?.user?.user_metadata?.full_name || ""} 
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary/50 outline-none text-sm transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      type="email" 
                      defaultValue={session?.user?.email || ""} 
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary/50 outline-none text-sm transition-colors"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your OAuth connections for quick login.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-background/50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-surface">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text">Google</h4>
                      <p className="text-xs text-text-secondary">Connected on {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg border border-border-light text-xs font-medium text-text-secondary hover:text-red-400 hover:border-red-400/30 transition-colors">
                    Disconnect
                  </button>
                </div>
                
                {/* Mock Disconnected State */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-border border-dashed bg-background/20 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-surface">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.22 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-text">GitHub</h4>
                      <p className="text-xs text-text-secondary">Not connected</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-surface text-xs font-medium text-text hover:bg-background transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
