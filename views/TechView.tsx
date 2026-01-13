import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import NewsCard from '../components/NewsCard';
import { useNews } from '../hooks/useNews';

export default function TechView({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const { news, loading } = useNews('Tech');

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pt-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-primary-purple shadow-[0_0_8px_#7f13ec]"></span>
            <p className="text-primary-purple font-mono text-xs font-medium tracking-wider uppercase">Live Feed</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Technology</h1>
          <p className="text-gray-400 mt-2 max-w-lg">Latest breakthroughs in AI, hardware, and the startup ecosystem.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-purple/20 border border-primary-purple/50 text-white text-sm font-medium hover:bg-primary-purple/30 transition-all">
            <span className="icon text-[18px]">apps</span>
            All Tech
          </button>
          <button className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 text-sm font-medium hover:text-white hover:border-gray-600 transition-all">
            <span className="icon text-[18px]">smart_toy</span>
            AI & ML
          </button>
          <button className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 text-sm font-medium hover:text-white hover:border-gray-600 transition-all">
            <span className="icon text-[18px]">memory</span>
            Hardware
          </button>
          <button className="size-9 flex items-center justify-center rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 hover:text-white hover:border-gray-600 transition-all ml-2">
            <span className="icon text-[20px]">tune</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

        {loading ? (
          <div className="col-span-full py-20 text-center text-gray-500 font-mono">Loading tech news...</div>
        ) : news.length > 0 ? (
          news.map((item, index) => (
            <NewsCard
              key={item.id}
              title={item.title}
              category={item.category}
              timeAgo={item.timeAgo}
              imageUrl={item.imageUrl}
              description={item.description}
              variant={index === 0 ? "hero" : "standard"}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-2"}
              categoryColor="text-primary-purple"
              breaking={index === 0}
            />
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-gray-500">No tech news found. Check your database connection.</div>
        )}

        {/* Stats Ticker - Custom Component as it's not a NewsCard */}
        <div className="md:col-span-1 md:row-span-1 bg-[#141118] border border-white/5 rounded-xl p-5 flex flex-col justify-between hover:border-gray-600 transition-colors">
          <div>
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Trending Topics</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary-purple/10 text-primary-purple border border-primary-purple/20 rounded text-xs font-medium">#AGI</span>
              <span className="px-2 py-1 bg-white/5 text-gray-300 border border-white/10 rounded text-xs font-medium">#NVIDIA</span>
              <span className="px-2 py-1 bg-white/5 text-gray-300 border border-white/10 rounded text-xs font-medium">#SpaceX</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-dashed border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">Market Sentiment</span>
              <span className="text-xs text-green-400 font-bold font-mono">+2.4% ▲</span>
            </div>
            <div className="h-1 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-green-500 w-[65%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Small Card - Static example or could come from DB too, keeping static for layout variety unless user populated DB fully */}
        <div className="glass-panel rounded-xl p-4 flex flex-col gap-3 hover:border-primary-purple/50 transition-colors cursor-pointer group">
          <div className="flex items-start justify-between">
            <div className="size-8 rounded bg-[#1e1e24] flex items-center justify-center text-white border border-white/5">
              <span className="icon text-[18px]">currency_bitcoin</span>
            </div>
            <span className="font-mono text-[10px] text-gray-500">ID:8829</span>
          </div>
          <h4 className="text-sm font-bold text-white group-hover:text-primary-purple transition-colors line-clamp-2">Bitcoin halving event: What miners are expecting</h4>
          <div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-gray-400">
            <span className="text-primary-purple font-bold">CRYPTO</span>
            <span>• 4h ago</span>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}