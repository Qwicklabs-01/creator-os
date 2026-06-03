"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "../../../utils/supabase/client";
import { 
  LayoutDashboard, 
  Briefcase, 
  Megaphone, 
  BarChart3, 
  Settings,
  LogOut,
  User,
  Menu,
  PenTool,
  Image as ImageIcon,
  Video,
  Share2,
  Users
} from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Content", href: "/dashboard/content", icon: PenTool },
  { name: "Images", href: "/dashboard/images", icon: ImageIcon },
  { name: "Videos", href: "/dashboard/videos", icon: Video },
  { name: "Brands", href: "/dashboard/brands", icon: Briefcase },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: Megaphone },
  { name: "Publishing", href: "/dashboard/publishing", icon: Share2 },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [session, setSession] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 border-b border-border bg-background/80 backdrop-blur-md z-40 flex items-center justify-between px-4">
        <Link href="/dashboard" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          CreatorOS
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text-secondary hover:text-text">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 glass border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="h-16 flex items-center px-6 border-b border-border/50">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Creator<span className="text-primary">OS</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "text-text-secondary hover:text-text hover:bg-surface"
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-text-secondary"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile Area */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-surface/50 border border-border-light mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 flex-shrink-0 overflow-hidden">
                {session?.user?.user_metadata?.avatar_url || session?.user?.image ? (
                  <img src={session?.user?.user_metadata?.avatar_url || session?.user?.image} alt="User avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-5 h-5 text-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-sm font-medium text-text truncate">
                  {session?.user?.user_metadata?.full_name || session?.user?.name || "User"}
                </p>
                <p className="text-xs text-text-secondary truncate">
                  {session?.user?.email || ""}
                </p>
              </div>
            </div>
            
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                router.push("/");
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
