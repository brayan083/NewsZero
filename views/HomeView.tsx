import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { useNews } from '../hooks/useNews';

export default function HomeView() {
  const navigate = useNavigate();
  const { news, loading, error } = useNews();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pb-32">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary-purple/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="flex items-center justify-between py-6 mb-4 sticky top-0 z-50">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="size-10 relative flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary-purple/20 transition-colors">
              <span className="icon text-white">bolt</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex flex-col leading-none">
              NewsZero
              <span className="text-[10px] text-gray-400 font-mono font-normal tracking-widest uppercase opacity-70">Aggregator v2.0</span>
            </h1>
          </div>
          <button
            onClick={() => navigate('/empty')}
            className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group backdrop-blur-md"
          >
            <span className="icon text-gray-400 text-[20px]">calendar_today</span>
            <div className="flex flex-col items-start hidden sm:flex">
              <span className="text-[10px] text-gray-500 font-mono uppercase leading-none mb-0.5">Time Machine</span>
              <span className="text-xs font-medium text-white leading-none">Oct 24, 2023</span>
            </div>
            <span className="icon text-gray-500 text-[16px]">expand_more</span>
          </button>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-auto-flow-dense">

          {loading ? (
            <div className="col-span-full py-20 text-center text-gray-500 font-mono">Loading dynamic feed...</div>
          ) : news.length > 0 ? (
            news.map((item, index) => (
              <NewsCard
                key={item.id}
                title={item.title}
                category={item.category}
                timeAgo={item.timeAgo}
                imageUrl={item.imageUrl}
                description={item.description}
                onClick={() => navigate(item.url ? item.url : `/${item.category.toLowerCase()}`)}
                variant={index === 0 ? "hero" : index === 3 ? "wide" : "standard"} // Simple logic for demo layout
                categoryColor={item.category === 'Tech' ? "text-primary-purple" : item.category === 'Crypto' ? "text-yellow-400" : "text-blue-400"}
                breaking={index === 0}
                className={index === 0 ? "col-span-1 md:col-span-2 lg:col-span-2 row-span-2" : index === 3 ? "col-span-1 md:col-span-2 lg:col-span-2" : ""}
              />
            ))
          ) : (
            <>
              {/* Fallback Static Content if no DB connection yet */}
              <NewsCard
                title={error ? "Connection Error" : "Connect to Firebase to see real news"}
                category="System"
                timeAgo="Now"
                description={error || "Please configure your .env file with valid Firebase credentials."}
                onClick={() => { }}
                variant="hero"
                categoryColor="text-red-500"
                className="col-span-full"
              />
            </>
          )}

          {/* Snapshot List - Keeping as custom since it's a list, not a NewsCard, might need its own component later */}
          <div className="col-span-1 row-span-2 glass-panel rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Market Snapshot</h3>
              <span className="icon text-gray-400">trending_up</span>
            </div>
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
              {[
                { label: 'BTC/USD', val: '+5.2%', desc: 'Bitcoin breaks resistance at $65k amid ETF rumors', color: 'text-yellow-400', accent: 'text-green-400', link: '/crypto' },
                { label: 'MERVAL', val: '-1.4%', desc: 'Argentina stocks dip following new central bank policy', color: 'text-cyan-400', accent: 'text-red-400', link: '/argentina' },
                { label: 'NVDA', val: '+2.8%', desc: 'NVIDIA announces new AI chip architecture', color: 'text-purple-400', accent: 'text-green-400', link: '/tech' },
                { label: 'ETH/USD', val: '+3.1%', desc: 'Ethereum gas fees hit 6-month low', color: 'text-blue-400', accent: 'text-green-400', link: '/crypto' },
              ].map((item, i) => (
                <div key={i} onClick={() => navigate(item.link)} className="group/item cursor-pointer border-b border-white/5 pb-4 last:border-0 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`${item.color} font-mono text-xs`}>{item.label}</span>
                    <span className={`${item.accent} font-mono text-xs`}>{item.val}</span>
                  </div>
                  <p className={`text-sm font-medium text-white leading-snug group-hover/item:${item.color} transition-colors`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/crypto')} className="w-full mt-4 py-2 text-xs font-mono text-center text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded bg-white/5 transition-all">
              View Full Report
            </button>
          </div>
        </div>

        {/* Floating Dock */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-lg">
          <div className="glass-panel rounded-full p-2 flex items-center justify-between shadow-2xl shadow-black/50">
            <button
              onClick={() => navigate('/')}
              className="relative flex items-center justify-center h-10 px-6 rounded-full bg-primary-purple text-white font-medium text-sm transition-all shadow-[0_0_15px_-3px_rgba(127,19,236,0.5)]"
            >
              All
            </button>
            <button
              onClick={() => navigate('/argentina')}
              className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all text-sm font-medium gap-2 group"
            >
              <span className="icon text-[18px] group-hover:animate-pulse">location_on</span>
              <span className="hidden sm:inline">Argentina</span>
            </button>
            <button
              onClick={() => navigate('/global')}
              className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium gap-2"
            >
              <span className="icon text-[18px]">public</span>
              <span className="hidden sm:inline">Global</span>
            </button>
            <button
              onClick={() => navigate('/tech')}
              className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-purple-400 hover:bg-white/5 transition-all text-sm font-medium gap-2 group"
            >
              <span className="icon text-[18px] group-hover:animate-pulse">memory</span>
              <span className="hidden sm:inline">Tech</span>
            </button>
            <button
              onClick={() => navigate('/crypto')}
              className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-all text-sm font-medium gap-2 group"
            >
              <span className="icon text-[18px] group-hover:animate-pulse">currency_bitcoin</span>
              <span className="hidden sm:inline">Cripto</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}