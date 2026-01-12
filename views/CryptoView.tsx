import React from 'react';

export default function CryptoView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Decorative Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-gold/5 blur-[120px] pointer-events-none z-0"></div>
      
      <header className="sticky top-0 z-50 px-6 py-4 glass-panel border-b-0 border-b-transparent">
         <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="size-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-gold to-orange-600 text-black">
                    <span className="icon font-bold">bolt</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-primary-gold transition-colors">NewsZero</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
                {['Newsfeed', 'Markets', 'Watchlist', 'Portfolio'].map((l, i) => (
                    <a key={l} className={`text-sm font-medium transition-colors ${i === 1 ? 'text-white shadow-[0_0_10px_rgba(236,164,19,0.3)]' : 'text-gray-400 hover:text-white'}`} href="#">{l}</a>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center glass-panel rounded-full px-3 py-1.5 h-10 w-64 focus-within:ring-1 focus-within:ring-primary-gold/50 transition-all">
                    <span className="icon text-gray-400 text-[20px]">search</span>
                    <input className="bg-transparent border-none text-sm text-white placeholder-gray-500 focus:ring-0 w-full font-mono focus:outline-none" placeholder="Search tickers, news..." type="text"/>
                </div>
                 <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvTNYiIDoDUNtgtUCbz-QZci50WGeeWRpeVprzmGxfMcvSSBmRSX2A4EDhs_zT4kuyqFzg0UOVNW5rfICBEg6PQ25lJj35hAsuvbV4wJAsE_rHwHSAy422a_GbckPlaEH2OQvSL_2GsswSOuw0DzqquY--mbXgbLUhwoo55Uo0FrCJpk9hZWdwGSjpnbkQPbrHihJP7f-Kz_5sSeMYmfz21Key6_xO7QTOSErZ_Hvw-jqgYK2edg5DMlFdANVsVLdEMA6n2M8pRbs5")'}}></div>
            </div>
         </div>
      </header>

      <main className="relative z-10 max-w-[1400px] mx-auto w-full p-6 space-y-8">
        {/* Floating Tabs */}
        <div className="flex justify-center">
            <div className="glass-panel rounded-full p-1.5 flex items-center gap-1 shadow-2xl">
                 <button onClick={() => onNavigate('home')} className="px-6 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all hover:bg-white/5">General</button>
                 <button className="px-6 py-2 rounded-full text-sm font-bold text-black bg-primary-gold shadow-[0_0_15px_rgba(236,164,19,0.4)] flex items-center gap-2">
                     <span className="icon text-[18px]">currency_bitcoin</span> Crypto
                 </button>
                 <button onClick={() => onNavigate('argentina')} className="px-6 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all hover:bg-white/5">Economy</button>
                 <button onClick={() => onNavigate('tech')} className="px-6 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all hover:bg-white/5">Tech</button>
                 <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all hover:bg-white/5">DeFi</button>
            </div>
        </div>

        {/* Tickers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                {sym: 'BTC/USD', price: '$43,205.10', chg: '+1.24%', up: true},
                {sym: 'ETH/USD', price: '$2,290.45', chg: '-0.52%', up: false},
                {sym: 'SOL/USD', price: '$98.12', chg: '+5.40%', up: true},
                {sym: 'XAU/USD', price: '$2,045.30', chg: '+0.15%', up: true},
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
            {/* Main Article */}
            <div className="glass-panel rounded-2xl md:col-span-2 lg:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer border border-white/5 hover:border-primary-gold/40 transition-colors">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCG4QJqgSUcCy3lI_Hs-gh43P4y1MHpu6cOGWnnfWxzGlqqQ4JjJW4-d8R3AwBY8E2HB2H8CWlUS5z8qy0JLxVfDUe0pIv80NL33RbKnl1AiVTx2ssmCFd9SS5A_rT9evw8JGJVPm3_Sr_e6y3ytgixmTAczfLiwGlo-Mk-2s4gYBZ2zZKGyk8L7F9XhfsbQUBQzRyDp50LSjo20REFbMyfnH6tNO5AlJOsUi9yCZOkeaEymUAKURRaPNPdktZk9Kh-ak_UYpAA6A69")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary-gold/20 text-primary-gold border border-primary-gold/30 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider">Analysis</span>
                        <span className="text-gray-400 text-xs font-mono flex items-center gap-1"><span className="icon text-[12px]">schedule</span> 2h ago</span>
                    </div>
                    <h2 className="text-3xl font-bold leading-tight text-white group-hover:text-primary-gold transition-colors">Bitcoin ETF Approval: The Dawn of a New Institutional Era?</h2>
                    <p className="text-gray-300 line-clamp-2 text-sm leading-relaxed max-w-lg">As regulators signal a shift in stance, major financial institutions prepare their infrastructure.</p>
                </div>
            </div>

            {/* List */}
            <div className="glass-panel rounded-2xl md:col-span-1 md:row-span-2 p-5 flex flex-col gap-4">
                 <div className="flex items-center justify-between border-b border-white/10 pb-3">
                     <h3 className="font-bold text-white flex items-center gap-2"><span className="icon text-primary-gold text-[20px]">bolt</span> Market Flash</h3>
                     <span className="animate-pulse w-2 h-2 rounded-full bg-red-500"></span>
                 </div>
                 <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                    {[
                        {tag: 'SEC', time: '12m', txt: 'Gary Gensler comments on crypto as a commodity vs security.', c: 'text-primary-gold'},
                        {tag: 'NFT', time: '45m', txt: 'Pudgy Penguins volume spikes 300% overnight amid retail adoption.', c: 'text-blue-400'},
                        {tag: 'DeFi', time: '1h', txt: 'Uniswap V4 hooks expected to revolutionize on-chain liquidity.', c: 'text-green-400'},
                        {tag: 'Macro', time: '2h', txt: 'Fed signals potential rate cuts in late 2024.', c: 'text-purple-400'},
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
            <div className="glass-panel rounded-2xl p-5 flex flex-col justify-between">
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
            <div className="glass-panel rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
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
            
            {/* Wide Bottom */}
            <div onClick={() => onNavigate('tech')} className="glass-panel rounded-2xl md:col-span-2 p-5 flex flex-col md:flex-row gap-6 group cursor-pointer hover:bg-white/5">
                 <div className="w-full md:w-1/3 rounded-lg bg-cover bg-center h-40 md:h-auto" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNCX82ZDrmX3diX1xPBKg2C-7I0BDnjoy0rqitLQdx_AsC1kskdG8CqrlCY5e2Pwhat6zhZFdafPvzQKI2iB1iAw8EmCX8HBSohfq09c6QAJYd0l-wZucwBiK63VIcGdzS0nhKA7M82ihblw7y5FqHHZCt1lDuGlIoGhhj2v7WR7tnVG_E7jcEDCsMBRQ2GmCvy9l5pUE2MBtuU3YKc0uw7xcPLD91M2H2SEDgJyGge2nYNG7g9xnE-dPpbauA1Pd400M4hvb5g5XW")'}}></div>
                 <div className="flex-1 flex flex-col justify-center">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider">Technology</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-gold transition-colors">The Intersection of AI and Blockchain: 2024 Outlook</h3>
                     <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">Exploring how generative AI models are being integrated into decentralized protocols.</p>
                 </div>
            </div>
        </div>
      </main>
    </div>
  );
}