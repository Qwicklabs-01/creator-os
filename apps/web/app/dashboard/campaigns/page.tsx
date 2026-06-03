import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Plus, Search, Filter, PlayCircle, CheckCircle2, Clock, CalendarDays } from "lucide-react";
import { getCampaigns } from "../../actions/campaigns";

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  const activeCampaigns = campaigns.filter(c => c.status === "active");
  const draftCampaigns = campaigns.filter(c => c.status === "draft");
  const completedCampaigns = campaigns.filter(c => c.status === "completed");

  const CampaignCard = ({ campaign }: { campaign: typeof campaigns[0] }) => (
    <Card className="hover:border-primary/30 transition-colors group cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {campaign.name}
            </CardTitle>
            <p className="text-sm text-text-secondary mt-1">{campaign.brand}</p>
          </div>
          <div className={`p-1.5 rounded-full ${
            campaign.status === 'active' ? 'bg-green-500/10 text-green-400' :
            campaign.status === 'draft' ? 'bg-yellow-500/10 text-yellow-400' :
            'bg-blue-500/10 text-blue-400'
          }`}>
            {campaign.status === 'active' && <PlayCircle className="w-5 h-5" />}
            {campaign.status === 'draft' && <Clock className="w-5 h-5" />}
            {campaign.status === 'completed' && <CheckCircle2 className="w-5 h-5" />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            <span>{campaign.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              {campaign.platforms.map((platform, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-surface border-2 border-background flex items-center justify-center text-[10px] font-bold">
                  {platform.charAt(0)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-text-secondary">{campaign.generatedPosts} AI Posts</span>
            <span className="text-text font-medium">{campaign.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                campaign.status === 'active' ? 'bg-green-500' :
                campaign.status === 'completed' ? 'bg-blue-500' :
                'bg-yellow-500'
              }`}
              style={{ width: `${campaign.progress}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-text-secondary mt-1">
            Manage your AI-driven content campaigns across all platforms.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="pl-9 pr-4 py-2 rounded-xl bg-surface border border-border focus:border-primary/50 outline-none text-sm w-48 sm:w-64 transition-colors"
            />
          </div>
          <button className="p-2.5 rounded-xl glass text-text-secondary hover:text-text transition-all">
            <Filter className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <Plus className="w-4 h-4" />
            New Campaign
          </button>
        </div>
      </div>

      {/* Kanban / List Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Active Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/50">
            <h3 className="font-semibold text-text flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Active
            </h3>
            <span className="px-2 py-0.5 rounded-md bg-surface text-xs font-medium">{activeCampaigns.length}</span>
          </div>
          <div className="space-y-4">
            {activeCampaigns.map(c => <CampaignCard key={c.id} campaign={c} />)}
          </div>
        </div>

        {/* Draft Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/50">
            <h3 className="font-semibold text-text flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              Draft
            </h3>
            <span className="px-2 py-0.5 rounded-md bg-surface text-xs font-medium">{draftCampaigns.length}</span>
          </div>
          <div className="space-y-4">
            {draftCampaigns.map(c => <CampaignCard key={c.id} campaign={c} />)}
          </div>
        </div>

        {/* Completed Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/50">
            <h3 className="font-semibold text-text flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Completed
            </h3>
            <span className="px-2 py-0.5 rounded-md bg-surface text-xs font-medium">{completedCampaigns.length}</span>
          </div>
          <div className="space-y-4">
            {completedCampaigns.map(c => <CampaignCard key={c.id} campaign={c} />)}
          </div>
        </div>

      </div>
    </div>
  );
}
