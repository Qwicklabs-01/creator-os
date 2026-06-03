import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../components/ui/card";
import { Plus, MoreVertical, Briefcase, Hash, Activity } from "lucide-react";
import Link from "next/link";
import { getBrands } from "../../actions/brands";

export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-text-secondary mt-1">
            Manage your brand identities, voices, and associated campaigns.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          <Plus className="w-4 h-4" />
          Add Brand
        </button>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Card key={brand.id} className="flex flex-col hover:border-primary/30 transition-all duration-300 group">
            <div className={`h-24 bg-gradient-to-br ${brand.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px]" />
              <div className="absolute top-4 right-4">
                <button className="p-1.5 rounded-lg bg-background/50 hover:bg-background text-text-secondary hover:text-text transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-surface border border-border shadow-lg flex items-center justify-center text-lg font-bold">
                {brand.name.charAt(0)}
              </div>
            </div>
            
            <CardHeader className="pt-10 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{brand.name}</CardTitle>
                <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                  brand.status === 'active' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                }`}>
                  {brand.status}
                </div>
              </div>
              <p className="text-sm text-text-secondary line-clamp-2 mt-2">
                {brand.description}
              </p>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-text-secondary">
                  <Hash className="w-4 h-4 mr-2 text-primary" />
                  <span className="font-medium text-text">Voice:</span> 
                  <span className="ml-2 truncate">{brand.brandVoice}</span>
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <Activity className="w-4 h-4 mr-2 text-secondary" />
                  <span className="font-medium text-text">Campaigns:</span> 
                  <span className="ml-2">{brand.activeCampaigns} active</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0 pb-6">
              <Link 
                href={`/dashboard/brands/${brand.id}`}
                className="w-full flex items-center justify-center py-2.5 rounded-lg border border-border-light text-sm font-medium hover:bg-surface hover:text-primary transition-colors"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}

        {/* Empty State / Add New Card */}
        <button className="flex flex-col items-center justify-center gap-4 h-full min-h-[300px] rounded-2xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
          <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-6 h-6 text-text-secondary group-hover:text-primary" />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-text group-hover:text-primary transition-colors">Create New Brand</h3>
            <p className="text-sm text-text-secondary mt-1">Set up a new client or identity</p>
          </div>
        </button>
      </div>
    </div>
  );
}
