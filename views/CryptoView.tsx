import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import NewsCard from '../components/NewsCard';
import { useNews } from '../hooks/useNews';

export default function CryptoView({ onNavigate }: { onNavigate?: (view: string) => void }) {
    const { news, loading } = useNews('Crypto');

    return (
        <DashboardLayout>
            {/* Page Title & Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pt-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-primary-gold shadow-[0_0_8px_rgba(236,164,19,0.8)]"></span>
                        <p className="text-primary-gold font-mono text-xs font-medium tracking-wider uppercase">Live Markets</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Finance & Crypto</h1>
                    <p className="text-gray-400 mt-2 max-w-lg">Real-time market data, blockchain news, and financial analysis.</p>
                </div>

                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                    <button className="px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-white text-sm font-medium hover:border-primary-gold/50 transition-all">
                        Overwiew
                    </button>
                    {['Bitcoin', 'DeFi', 'NFTs', 'Regulation'].map(t => (
                        <button key={t} className="px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 text-sm font-medium hover:text-white hover:border-gray-600 transition-all">
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tickers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { sym: 'BTC/USD', price: '$43,205.10', chg: '+1.24%', up: true },
                    { sym: 'ETH/USD', price: '$2,290.45', chg: '-0.52%', up: false },
                    { sym: 'SOL/USD', price: '$98.12', chg: '+5.40%', up: true },
                    { sym: 'XAU/USD', price: '$2,045.30', chg: '+0.15%', up: true },
                ].map((t, i) => (
                    <div key={i} className={`glass-panel rounded-xl p-4 flex flex-col gap-1 hover:bg-white/5 transition-colors border-l-2 border-l-transparent ${t.up ? 'hover:border-l-green-500' : 'hover:border-l-red-500'}`}>
                        <div className="flex justify-between items-start">
                            <span className="text-xs font-mono text-gray-400 font-bold">{t.sym}</span>
                            <span className={`icon text-[16px] ${t.up ? 'text-green-500' : 'text-red-500'}`}>{t.up ? 'trending_up' : 'trending_down'}</span>
                        </div>
                        <p className="text-xl font-mono font-bold text-white tracking-tight">{t.price}</p>
                        <p className={`text-xs font-mono ${t.up ? 'text-green-500' : 'text-red-500'}`}>{t.chg} <span className="text-gray-600 ml-1">24h</span></p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
                {loading ? (
                    <div className="col-span-full py-20 text-center text-gray-500 font-mono">Loading crypto news...</div>
                ) : news.length > 0 ? (
                    news.map((item, index) => (
                        <NewsCard
                            key={item.id}
                            title={item.title}
                            category={item.category}
                            timeAgo={item.timeAgo}
                            imageUrl={item.imageUrl}
                            description={item.description}
                            variant={index === 0 ? "hero" : index === 3 ? "wide" : "standard"}
                            className={index === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2 lg:col-span-2" : ""}
                            categoryColor="text-primary-gold"
                            breaking={index === 0}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-10 text-center text-gray-500">No crypto news found. Check your database connection.</div>
                )}

                {/* List Widget - kept static for now as a feature to be implemented later or if user wants it dynamic too */}
                <div className="glass-panel rounded-2xl md:col-span-1 md:row-span-2 p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <h3 className="font-bold text-white flex items-center gap-2"><span className="icon text-primary-gold text-[20px]">bolt</span> Market Flash</h3>
                        <span className="animate-pulse w-2 h-2 rounded-full bg-red-500"></span>
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                        {[
                            { tag: 'SEC', time: '12m', txt: 'Gary Gensler comments on crypto as a commodity vs security.', c: 'text-primary-gold' },
                            { tag: 'NFT', time: '45m', txt: 'Pudgy Penguins volume spikes 300% overnight amid retail adoption.', c: 'text-blue-400' },
                            { tag: 'DeFi', time: '1h', txt: 'Uniswap V4 hooks expected to revolutionize on-chain liquidity.', c: 'text-green-400' },
                            { tag: 'Macro', time: '2h', txt: 'Fed signals potential rate cuts in late 2024.', c: 'text-purple-400' },
                        ].map((item, i) => (
                            <div key={i} className="group/item cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`text-[10px] font-mono ${item.c} border border-current/20 px-1.5 rounded opacity-80`}>{item.tag}</span>
                                    <span className="text-[10px] font-mono text-gray-500">{item.time}</span>
                                </div>
                                <h4 className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors leading-snug">{item.txt}</h4>
                                {i !== 3 && <div className="h-px w-full bg-white/5 mt-3"></div>}
                            </div>
                        ))}
                    </div>
                    <button className="mt-auto w-full py-2 text-xs font-mono text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded flex items-center justify-center gap-2 transition-all">View All <span className="icon text-[14px]">arrow_forward</span></button>
                </div>

                {/* Fear Greed */}
                <div className="glass-panel rounded-2xl p-5 flex flex-col justify-between md:col-span-1">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-gray-400">Fear & Greed Index</span>
                            <span className="icon text-gray-500 text-[18px]">info</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-mono font-bold text-primary-gold">76</span>
                            <span className="text-sm font-bold text-white mb-1.5">Extreme Greed</span>
                        </div>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mt-4 relative">
                        <div className="absolute left-0 top-0 h-full w-[76%] bg-gradient-to-r from-green-500 to-primary-gold rounded-full"></div>
                    </div>
                </div>

                {/* Top Gainer */}
                <div className="glass-panel rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between md:col-span-1">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><span className="icon text-8xl text-green-500">rocket_launch</span></div>
                    <div>
                        <p className="text-xs font-mono text-gray-400 uppercase">Top Gainer (24h)</p>
                        <h3 className="text-2xl font-bold text-white mt-1">Celestia <span className="text-sm text-gray-400 font-normal ml-1">TIA</span></h3>
                    </div>
                    <div>
                        <p className="text-4xl font-mono font-bold text-green-500 tracking-tight">+18.4%</p>
                        <p className="text-xs text-gray-400 mt-1">Vol: $450M</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}