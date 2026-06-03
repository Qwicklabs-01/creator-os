import { createClient } from "../../utils/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Activity, Users, Target, Zap, ArrowUpRight, Instagram, Twitter, Linkedin } from "lucide-react";

const metrics = [
  {
    title: "Total Audience",
    value: "124.5K",
    change: "+12.3%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Active Campaigns",
    value: "12",
    change: "+2",
    icon: Target,
    trend: "up"
  },
  {
    title: "AI Actions Taken",
    value: "8,234",
    change: "+1,234",
    icon: Zap,
    trend: "up"
  },
  {
    title: "Engagement Rate",
    value: "8.4%",
    change: "+0.6%",
    icon: Activity,
    trend: "up"
  }
];

const recentActivity = [
  {
    id: 1,
    action: "Generated Instagram Reel Hook",
    brand: "Lumina Skincare",
    time: "10 mins ago",
    icon: Instagram,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    id: 2,
    action: "Scheduled Twitter Thread",
    brand: "TechFlow SaaS",
    time: "2 hours ago",
    icon: Twitter,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: 3,
    action: "Analyzed Audience Sentiment",
    brand: "CreatorOS",
    time: "5 hours ago",
    icon: Activity,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    id: 4,
    action: "Published LinkedIn Carousel",
    brand: "TechFlow SaaS",
    time: "1 day ago",
    icon: Linkedin,
    color: "text-blue-600",
    bg: "bg-blue-600/10"
  }
];

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  // Extract first name for greeting (Supabase user metadata)
  const firstName = session?.user?.user_metadata?.full_name?.split(' ')[0] || session?.user?.email?.split('@')[0] || 'Creator';

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-text">
            Welcome back, {firstName}
          </h2>
          <p className="text-text-secondary mt-1">
            Here's what your AI content agency has been up to today.
          </p>
        </div>
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#06080D] bg-primary/20 flex items-center justify-center text-xs font-bold z-30">AI</div>
          <div className="w-10 h-10 rounded-full border-2 border-[#06080D] bg-secondary/20 flex items-center justify-center text-xs font-bold z-20">DB</div>
          <div className="w-10 h-10 rounded-full border-2 border-[#06080D] bg-accent/20 flex items-center justify-center text-xs font-bold z-10">AG</div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, i) => (
          <Card key={i} className="hover:border-primary/30 transition-colors duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${metric.title === 'AI Actions Taken' ? 'bg-primary/20 text-primary' : 'bg-surface border border-border-light text-text-secondary'}`}>
                <metric.icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-text">{metric.value}</div>
              <p className="flex items-center text-sm text-green-400 mt-1">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Activity Feed */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Autonomous Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className={`mt-0.5 p-2 rounded-xl ${activity.bg} ${activity.color}`}>
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none text-text">
                      {activity.action}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {activity.brand}
                    </p>
                  </div>
                  <div className="text-xs text-text-secondary">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Quick Actions / Active Brands */}
        <div className="space-y-8">
          <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <CardHeader>
              <CardTitle>Next AI Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary mb-4">
                CreatorOS suggests running a sentiment analysis on your latest 'Lumina Skincare' campaign.
              </p>
              <button className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                Execute Action
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Brands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Lumina Skincare', 'TechFlow SaaS', 'CreatorOS'].map((brand, i) => (
                  <div key={brand} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-xs font-bold">
                        {brand.charAt(0)}
                      </div>
                      <span className="text-sm font-medium">{brand}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
