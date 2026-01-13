import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import NewsCard from '../components/NewsCard';
import { useNews } from '../hooks/useNews';

export default function GlobalView({ onNavigate }: { onNavigate?: (view: string) => void }) {
    const { news, loading } = useNews('Global');

    return (
        <DashboardLayout>
            {/* Page Title & Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pt-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
                        <p className="text-primary-blue font-mono text-xs font-medium tracking-wider uppercase">Global Edition • v2.0</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">World News</h1>
                    <p className="text-gray-400 mt-2 max-w-lg">Breaking headlines, international affairs, and cultural deep dives.</p>
                </div>

                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                    <button className="px-4 py-2 rounded-lg bg-primary-blue/10 border border-primary-blue/30 text-white text-sm font-bold shadow-[0_0_15px_rgba(13,89,242,0.2)] hover:bg-primary-blue/20 transition-all">
                        Top Stories
                    </button>
                    {['Politics', 'Business', 'Opinion', 'Science'].map(t => (
                        <button key={t} className="px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 text-sm font-medium hover:text-white hover:border-gray-600 transition-all">
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { l: 'S&P 500', v: '4,120.50', c: '+1.2%', up: true },
                    { l: 'NASDAQ', v: '12,850.00', c: '-0.5%', up: false },
                    { l: 'EUR/USD', v: '1.0842', c: '+0.1%', up: true }
                ].map((s, i) => (
                    <div key={i} className="glass-panel p-4 rounded-xl flex flex-col justify-between h-24">
                        <div className="flex justify-between items-start">
                            <span className="font-mono text-xs text-gray-400">{s.l}</span>
                            <span className={`icon text-sm ${s.up ? 'text-[#0bda5e]' : 'text-[#fa6238]'}`}>{s.up ? 'trending_up' : 'trending_down'}</span>
                        </div>
                        <div>
                            <p className="text-xl font-bold tracking-tight text-white">{s.v}</p>
                            <p className={`font-mono text-xs ${s.up ? 'text-[#0bda5e]' : 'text-[#fa6238]'}`}>{s.c}</p>
                        </div>
                    </div>
                ))}
                <div className="glass-panel p-4 rounded-xl flex flex-col justify-between h-24 relative overflow-hidden group cursor-pointer hover:bg-white/5">
                    <div className="relative z-10 flex justify-between items-center h-full">
                        <div><p className="font-bold text-white">Weather</p><p className="font-mono text-xs text-gray-400">London, UK</p></div>
                        <div className="text-right"><span className="icon text-yellow-400">partly_cloudy_day</span><p className="text-lg font-bold text-white">14°C</p></div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] pb-8">

                {loading ? (
                    <div className="col-span-full py-20 text-center text-gray-500 font-mono">Loading global news...</div>
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
                            className={index === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-2" : "md:col-span-1"}
                            categoryColor="text-primary-blue"
                            breaking={index === 0}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-10 text-center text-gray-500">No global news found. Check your database connection.</div>
                )}

                {/* Audio Briefing */}
                <div className="glass-panel rounded-xl p-5 flex flex-col md:col-span-1 md:row-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="icon text-primary-blue">podcasts</span>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Audio Briefing</h3>
                    </div>
                    <div className="flex-1 space-y-6">
                        {[
                            { t: 'The Daily Global', sub: '15 min • Morning Edition', pct: '75%' },
                            { t: 'Tech Roundup', sub: '8 min • TechCrunch', pct: '0%' },
                            { t: 'Subscriber Exclusive', sub: 'Unlock full access', pct: '0%', lock: true }
                        ].map((p, i) => (
                            <div key={i} className={`group/item cursor-pointer ${p.lock ? 'opacity-70' : ''}`}>
                                <div className="flex gap-3 mb-2">
                                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-primary-blue group-hover/item:text-white transition-colors">
                                        <span className="icon text-[20px]">{p.lock ? 'lock' : 'play_arrow'}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white leading-tight">{p.t}</h4>
                                        <p className="text-xs font-mono text-gray-400 mt-1">{p.sub}</p>
                                    </div>
                                </div>
                                {!p.lock && <div className="w-full bg-[#282e39] h-1 rounded-full overflow-hidden"><div className="bg-primary-blue h-full" style={{ width: p.pct }}></div></div>}
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-mono text-center transition-colors text-gray-300">VIEW ALL EPISODES</button>
                </div>

                {/* Opinion/Science/Culture loop */}
                {[
                    { cat: 'OPINION', c: 'text-[#fa6238]', t: 'Why the Carbon Tax Proposal is Failing in Parliament', auth: 'By Sarah Jenkins' },
                    { cat: 'SCIENCE', c: 'text-blue-400', t: 'Mars Rover Sends Back High-Res Panorama of Crater', auth: 'NASA Press Release' },
                    { cat: 'CULTURE', c: 'text-purple-400', t: 'Digital Art Sales Surge Despite NFT Market Crash', auth: 'The Verge' }
                ].map((a, i) => (
                    <div key={i} className="glass-panel p-5 rounded-xl flex flex-col justify-center hover:bg-white/5 transition-colors cursor-pointer group border border-white/5 hover:border-white/10 md:col-span-1">
                        <span className={`text-xs font-mono ${a.c} block mb-2`}>{a.cat}</span>
                        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:underline decoration-primary-blue decoration-2 underline-offset-4">{a.t}</h3>
                        <p className="text-xs text-gray-500 mb-3">{a.auth}</p>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
}