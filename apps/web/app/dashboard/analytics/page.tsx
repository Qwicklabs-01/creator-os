import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { TrendingUp, Users, Eye, MousePointerClick, ArrowUpRight, ArrowDownRight } from "lucide-react";

const mainMetrics = [
  { title: "Total Views", value: "2.4M", change: "+14.2%", trend: "up", icon: Eye },
  { title: "Audience Growth", value: "+12.5K", change: "+5.1%", trend: "up", icon: Users },
  { title: "Engagement Rate", value: "6.8%", change: "-0.4%", trend: "down", icon: MousePointerClick },
  { title: "AI Conversion Score", value: "92/100", change: "+2.1%", trend: "up", icon: TrendingUp },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header */}
      <div>
        <p className="text-text-secondary mt-1">
          Track the performance of your AI-generated content across all platforms.
        </p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {mainMetrics.map((metric, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-surface border border-border-light text-text-secondary">
                  <metric.icon className="w-5 h-5" />
                </div>
                <div className={`flex items-center text-sm font-medium ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                  {metric.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-text-secondary">{metric.title}</p>
                <h3 className="text-3xl font-bold text-text mt-1">{metric.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Main Chart (Mock) */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Audience Growth (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Visual Mock of a Line/Bar Chart */}
            <div className="h-[300px] w-full flex items-end justify-between gap-2 pt-4 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-border-light" />
                ))}
              </div>
              
              {/* Bars */}
              {[30, 45, 25, 60, 75, 45, 80, 95, 65, 85, 100, 70, 90, 85].map((height, i) => (
                <div key={i} className="w-full relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-sm hover:from-primary/40 hover:to-primary transition-colors duration-300"
                    style={{ height: `${height}%` }}
                  />
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-surface border border-border px-2 py-1 rounded text-xs font-bold pointer-events-none transition-opacity z-10">
                    {height}k
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-text-secondary font-medium px-1">
              <span>May 1</span>
              <span>May 15</span>
              <span>May 30</span>
            </div>
          </CardContent>
        </Card>

        {/* Platform Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { name: "Instagram", share: 45, color: "bg-pink-500" },
                { name: "TikTok", share: 30, color: "bg-black dark:bg-white" },
                { name: "LinkedIn", share: 15, color: "bg-blue-600" },
                { name: "Twitter", share: 10, color: "bg-blue-400" },
              ].map((platform) => (
                <div key={platform.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-text">{platform.name}</span>
                    <span className="text-text-secondary">{platform.share}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${platform.color}`}
                      style={{ width: `${platform.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="text-sm font-semibold text-primary mb-1">AI Insight</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Instagram Reels generated by CreatorOS are currently outperforming standard posts by 3x. Consider reallocating TikTok content to Instagram.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
