import React from 'react';

export default function GlobalView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 glass-panel rounded-r-2xl h-screen sticky top-0 p-6 justify-between shrink-0 border-r border-white/10 bg-black/40">
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => onNavigate('home')}>
                <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">NewsZero</h1>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
                    <p className="font-mono text-xs text-[#9ca6ba]">Global Edition_v2.0</p>
                </div>
            </div>
            <nav className="flex flex-col gap-2">
                 <button onClick={() => onNavigate('home')} className="flex items-center gap-3 px-4 py-3 rounded-lg group transition-all hover:bg-white/5 text-[#9ca6ba] hover:text-white">
                    <span className="icon text-[20px]">home</span>
                    <span className="text-sm font-medium">Home</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg group transition-all bg-primary-blue/10 border border-primary-blue/30 text-white shadow-[0_0_15px_rgba(13,89,242,0.2)]">
                    <span className="icon text-[20px]">public</span>
                    <span className="text-sm font-medium">Global Feed</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg group transition-all hover:bg-white/5 text-[#9ca6ba] hover:text-white">
                    <span className="icon text-[20px]">trending_up</span>
                    <span className="text-sm font-medium">Trending</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg group transition-all hover:bg-white/5 text-[#9ca6ba] hover:text-white">
                    <span className="icon text-[20px]">person</span>
                    <span className="text-sm font-medium">Profile</span>
                </button>
            </nav>
        </div>
        <div className="flex flex-col gap-4">
             <div className="p-4 rounded-xl bg-gradient-to-br from-primary-blue/20 to-transparent border border-primary-blue/20">
                <p className="text-xs font-mono text-primary-blue mb-2">SUBSCRIPTION</p>
                <p className="text-sm font-bold text-white mb-1">Pro Plan Active</p>
                <p className="text-xs text-[#9ca6ba]">Next billing: Oct 24</p>
             </div>
             <button className="flex items-center gap-2 text-[#9ca6ba] hover:text-white text-sm px-2">
                <span className="icon text-[18px]">settings</span> Preferences
             </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col p-6 gap-6 min-w-0">
         <header className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel rounded-2xl p-4 sticky top-6 z-20 shadow-lg bg-[#0a0a0a]/80 backdrop-blur-xl">
             <div className="relative w-full md:w-96 group">
                 <span className="icon absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca6ba] group-focus-within:text-primary-blue transition-colors">search</span>
                 <input className="block w-full pl-10 pr-4 py-2.5 bg-[#1b1f27]/50 border border-white/10 rounded-lg text-sm text-white placeholder-[#9ca6ba] focus:outline-none focus:border-primary-blue/50 focus:ring-1 focus:ring-primary-blue/50 transition-all font-mono" placeholder="Search global headlines..." type="text"/>
                 <div className="absolute inset-y-0 right-2 flex items-center">
                    <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-bold text-[#9ca6ba] border border-[#3b4354] rounded bg-[#282e39]">CMD+K</kbd>
                 </div>
             </div>
             <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full md:w-auto">
                 <button onClick={() => onNavigate('home')} className="px-5 py-2 rounded-full text-[#9ca6ba] hover:text-white hover:bg-white/5 text-sm font-medium transition-colors whitespace-nowrap">Home</button>
                 <button className="relative px-5 py-2 rounded-full bg-primary-blue text-white text-sm font-bold shadow-[0_0_15px_rgba(13,89,242,0.3)] whitespace-nowrap">Global <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></span></button>
                 <button onClick={() => onNavigate('tech')} className="px-5 py-2 rounded-full text-[#9ca6ba] hover:text-white hover:bg-white/5 text-sm font-medium transition-colors whitespace-nowrap">Tech</button>
                 <button onClick={() => onNavigate('crypto')} className="px-5 py-2 rounded-full text-[#9ca6ba] hover:text-white hover:bg-white/5 text-sm font-medium transition-colors whitespace-nowrap">Finance</button>
                 <button className="px-5 py-2 rounded-full text-[#9ca6ba] hover:text-white hover:bg-white/5 text-sm font-medium transition-colors whitespace-nowrap">Science</button>
             </div>
         </header>

         {/* Stats */}
         <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
                 {l: 'S&P 500', v: '4,120.50', c: '+1.2%', up: true},
                 {l: 'NASDAQ', v: '12,850.00', c: '-0.5%', up: false},
                 {l: 'EUR/USD', v: '1.0842', c: '+0.1%', up: true}
             ].map((s, i) => (
                 <div key={i} className="glass-card p-4 rounded-xl flex flex-col justify-between h-24">
                     <div className="flex justify-between items-start">
                         <span className="font-mono text-xs text-[#9ca6ba]">{s.l}</span>
                         <span className={`icon text-sm ${s.up ? 'text-[#0bda5e]' : 'text-[#fa6238]'}`}>{s.up ? 'trending_up' : 'trending_down'}</span>
                     </div>
                     <div>
                         <p className="text-xl font-bold tracking-tight">{s.v}</p>
                         <p className={`font-mono text-xs ${s.up ? 'text-[#0bda5e]' : 'text-[#fa6238]'}`}>{s.c}</p>
                     </div>
                 </div>
             ))}
             <div className="glass-card p-4 rounded-xl flex flex-col justify-between h-24 relative overflow-hidden group cursor-pointer hover:bg-white/5">
                 <div className="relative z-10 flex justify-between items-center h-full">
                     <div><p className="font-bold text-white">Weather</p><p className="font-mono text-xs text-[#9ca6ba]">London, UK</p></div>
                     <div className="text-right"><span className="icon text-yellow-400">partly_cloudy_day</span><p className="text-lg font-bold">14°C</p></div>
                 </div>
             </div>
         </section>

         {/* Grid */}
         <section className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(200px,auto)] gap-4 pb-8">
             <article className="md:col-span-6 lg:col-span-8 row-span-2 glass-card rounded-2xl relative overflow-hidden group cursor-pointer border border-white/10 hover:border-primary-blue/30 transition-all">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwSjNko0Qz0Kqjrq-Ea3Y9Z-3AAzHJEdTetD3jLR81c1i-ALaI18fQXR-TEQu9NMVWsve2zD7ISOqBpQfezIx54AeQFOo7GQQzaCiWrCi1DrHBro_Jjf2BZSy7E2XiUTs5tb4bMOVJpLQwLP6scTI-RtfoJ8lAhwFT7yx1WSHwGgCtfWuF88uMxnwZQdoY36NNiTD7wiCzvratT3dQCf_vOVUGY7Lbuot9FOFUCggkjSPWDjrFjw_34_yTkOP98I1xNJwrDG8sIh4I")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 rounded bg-primary-blue text-white text-[10px] font-mono font-bold uppercase tracking-wider">Breaking</span>
                        <span className="font-mono text-xs text-gray-300 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> LIVE COVERAGE</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl group-hover:text-primary-blue transition-colors">Global Summit Reaches Historic Digital Infrastructure Accord</h2>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
                        <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-gray-600 bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYHvxx-7mvFbUSthM1JojiVfzibOWhJfD9Y_DBJrtAkWzxYquUuMeAeRFHArFICeoA-VGUWvWJTDwvXsDI3-rvJg_15bp18j0UdPPqB1pqUgdPfD_vqX7rpLgpvrwnXKfa73M4cJKt7AIxC-bKCNal2Y_nruLi6-jqbH9AW824iwVjVuOt7_Xvrr8yMRNuVyLubKADiwlEV_66-TGqCCF-MLy8yPAH_pV_JBzmuJT_npjpB3nd2KXeEwoI2XV4EOHYtyyQetMYoJ66")'}}></div>
                             <span className="font-mono text-gray-300">Alex Chen</span>
                        </div>
                        <span className="font-mono text-gray-300">12 min read</span>
                    </div>
                </div>
             </article>

             <article className="md:col-span-3 lg:col-span-4 glass-card rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:bg-white/5">
                <div>
                     <div className="flex justify-between items-start mb-4">
                        <span onClick={() => onNavigate('tech')} className="text-xs font-mono text-primary-blue bg-primary-blue/10 px-2 py-1 rounded">TECH</span>
                        <span className="icon text-gray-400 hover:text-white">bookmark</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-primary-blue transition-colors">Semiconductor Crisis: New Fabs Announced in Europe</h3>
                     <p className="text-sm text-[#9ca6ba] line-clamp-3">Major chip manufacturers unveil plans for a $45B expansion.</p>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                    <span className="font-mono text-xs text-gray-400">2h ago</span><span className="font-mono text-xs text-gray-400">Bloomberg</span>
                </div>
             </article>

             <article onClick={() => onNavigate('crypto')} className="md:col-span-3 lg:col-span-4 glass-card rounded-2xl flex flex-col overflow-hidden group cursor-pointer">
                 <div className="h-40 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmFfx59vZvd9c9lk3Jqw_H0fibcPBZQmTWq-g9vIjxQtOB5teeDmTmQtQcah7bh951_NNgVwGaHtOEJoMeOKPHsoO6AF6gZ_JXQCmIObSh0_s5-Ih_AvOd7XMJQ7aVlbG4-eUIcpaYlq_Baa80Z5LKf7OxSLBGnaIJTDTTpqzyrOfX6vU6fLZW-F1O6zeVS4kXHsTdbN9ltOi1FOyBS0FMwHXMF3H9NvJpGL3OYq-rgT7wSE7Bn1XXfx-63pnWFt4TNT3BllevhAl-")'}}>
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                 </div>
                 <div className="p-5 flex flex-col flex-1 justify-between">
                     <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary-blue transition-colors">Crypto Markets Stabilize After Week of Volatility</h3>
                     <div className="flex items-center justify-between mt-3">
                         <span className="font-mono text-xs text-gray-400">CoinDesk</span>
                         <span className="font-mono text-xs text-[#0bda5e]">+5.2% Today</span>
                     </div>
                 </div>
             </article>

             <article className="md:col-span-6 lg:col-span-3 row-span-2 glass-card rounded-2xl p-5 flex flex-col">
                 <div className="flex items-center gap-2 mb-6">
                     <span className="icon text-primary-blue">podcasts</span>
                     <h3 className="text-sm font-bold uppercase tracking-wider text-white">Audio Briefing</h3>
                 </div>
                 <div className="flex-1 space-y-6">
                     {[
                         {t: 'The Daily Global', sub: '15 min • Morning Edition', pct: '75%'},
                         {t: 'Tech Roundup', sub: '8 min • TechCrunch', pct: '0%'},
                         {t: 'Subscriber Exclusive', sub: 'Unlock full access', pct: '0%', lock: true}
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
                             {!p.lock && <div className="w-full bg-[#282e39] h-1 rounded-full overflow-hidden"><div className="bg-primary-blue h-full" style={{width: p.pct}}></div></div>}
                         </div>
                     ))}
                 </div>
                 <button className="w-full mt-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-mono text-center transition-colors">VIEW ALL EPISODES</button>
             </article>

             {[
                 {cat: 'OPINION', c: 'text-[#fa6238]', t: 'Why the Carbon Tax Proposal is Failing in Parliament', auth: 'By Sarah Jenkins'},
                 {cat: 'SCIENCE', c: 'text-blue-400', t: 'Mars Rover Sends Back High-Res Panorama of Crater', auth: 'NASA Press Release'},
                 {cat: 'CULTURE', c: 'text-purple-400', t: 'Digital Art Sales Surge Despite NFT Market Crash', auth: 'The Verge'}
             ].map((a, i) => (
                 <article key={i} className="md:col-span-3 lg:col-span-3 glass-card rounded-2xl p-5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                     <span className={`text-xs font-mono ${a.c} block mb-2`}>{a.cat}</span>
                     <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:underline decoration-primary-blue decoration-2 underline-offset-4">{a.t}</h3>
                     <p className="text-xs text-[#9ca6ba] mb-3">{a.auth}</p>
                 </article>
             ))}
         </section>
      </main>
    </div>
  );
}