import React, { useEffect, useState } from 'react';

export default function ArgentinaView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}));
    const i = setInterval(() => setTime(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})), 60000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 h-full border-r border-white/5 flex flex-col bg-[#0f0f0f]/80 backdrop-blur-xl shrink-0 z-20">
         <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5 cursor-pointer" onClick={() => onNavigate('home')}>
             <div className="size-8 rounded bg-gradient-to-br from-primary-sky to-blue-600 flex items-center justify-center text-black font-bold text-lg">N</div>
             <span className="ml-3 text-xl font-bold hidden lg:block tracking-tight">NewsZero</span>
         </div>
         <nav className="flex-1 py-8 flex flex-col gap-2 px-3">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors group text-gray-400 hover:text-white hover:bg-white/5">
                <span className="icon">home</span>
                <span className="hidden lg:block font-medium">Home</span>
            </button>
            <button className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors group text-gray-400 hover:text-white hover:bg-white/5">
                <span className="icon">explore</span>
                <span className="hidden lg:block font-medium">Discover</span>
            </button>
             <button className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors group bg-primary-sky/10 text-primary-sky border border-primary-sky/20">
                <span className="icon">category</span>
                <span className="hidden lg:block font-medium">Categories</span>
            </button>
            <button className="flex items-center gap-4 px-3 py-3 rounded-lg transition-colors group text-gray-400 hover:text-white hover:bg-white/5">
                <span className="icon">bookmarks</span>
                <span className="hidden lg:block font-medium">Saved</span>
            </button>

            <div className="my-4 border-t border-white/5 mx-2"></div>
            <div className="px-3 py-2 hidden lg:block">
                 <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Feeds</p>
                 <div className="flex flex-col gap-3 pl-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                        <span>Firebase Live</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-sky shadow-[0_0_8px_rgba(43,189,238,0.6)]"></span>
                        <span>Reuters API</span>
                    </div>
                 </div>
            </div>
         </nav>
         <div className="p-4 border-t border-white/5">
            <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="size-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center overflow-hidden border border-gray-500">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDINmW24lSBNEmnhxtMdrhfmzdH1mVGan2RunyYXKOKkR4mNp_M0gxruDVzLw4RIRqC8Ql9dGUjWy7_rp1jG7AOMUp_2d-QhMdtl9EOEuTrxhUZbLauV-sMCUXdrprSwAJ5W9UTUClXz2u1aoN7YsBQqtA2RlBhvCuicgUISnbGiEUYqWj2WBc2R0T_mtx8gOF7R06AdYRcp33Wp1rgScRKihuq6cu4pW2_iEQgyX_sBAKJMBRERPXvgNfSQ-UXEIKGhFo8FkR12iv9"/>
                </div>
                <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-semibold text-white">Alex M.</span>
                    <span className="text-xs font-mono text-gray-500">PRO Member</span>
                </div>
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-primary-sky/5 blur-[120px] pointer-events-none z-0"></div>
          
          <header className="h-20 shrink-0 border-b border-white/5 flex items-center justify-between px-8 z-10 bg-[#0a0a0a]/50 backdrop-blur-md">
             <div className="flex items-center gap-4 flex-1">
                 <div className="relative w-full max-w-md group">
                     <span className="icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary-sky text-[20px]">search</span>
                     <input className="w-full bg-[#151515] border border-white/10 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary-sky/50 focus:ring-1 focus:ring-primary-sky/50 transition-all placeholder:text-gray-600 font-mono" placeholder="Search topics, sources..." />
                 </div>
             </div>
             <div className="flex items-center gap-6">
                 <button className="relative text-gray-400 hover:text-white transition-colors">
                     <span className="icon text-[24px]">notifications</span>
                     <span className="absolute top-0 right-0 w-2 h-2 bg-primary-sky rounded-full border border-black"></span>
                 </button>
                 <div className="h-8 w-[1px] bg-white/10"></div>
                 <div className="text-right hidden sm:block">
                     <p className="text-xs text-gray-400 font-mono">{time}</p>
                     <p className="text-xs font-bold tracking-wide text-primary-sky">BUENOS AIRES</p>
                 </div>
             </div>
          </header>

          <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 p-4 lg:p-8">
             <div className="max-w-7xl mx-auto flex flex-col gap-6">
                 {/* Tabs */}
                 <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                         <button onClick={() => onNavigate('global')} className="px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-white/5 text-gray-400 hover:text-white">Global</button>
                         <button onClick={() => onNavigate('tech')} className="px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-white/5 text-gray-400 hover:text-white">Tech</button>
                         <button className="px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-primary-sky/15 text-primary-sky border border-primary-sky flex items-center gap-2">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-sky opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-sky"></span>
                             </span>
                             Argentina
                         </button>
                         {['Economy', 'Sports', 'Politics'].map(t => <button key={t} className="px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-white/5 text-gray-400 hover:text-white">{t}</button>)}
                     </div>
                     <button className="text-gray-400 hover:text-white flex items-center gap-1 text-sm font-mono">
                         <span className="icon text-[18px]">tune</span> Filter
                     </button>
                 </div>

                 {/* Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
                     {/* Hero */}
                     <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFkgC3Az13Q7gXYzfS-rFdAoWXUBeK7UBuzRGhyuJi2_-dXK6fT7ZdeIC3isgwvDiZgC7JDiQAMPohVgX1pSjCsjPtPLls_h6M66YDt2pzXWSqPfBcEWL0CbdCLIi_MkWyDfWyC_N4CsqX4ik65Ozp-v4djiss-DW6V3bFk60Te3MSr3H9LKxPl941u5R-LEFDd7nr-bs_hKF4bd_QJwlto__mExUX3MUBEB54qbCJdiPv1hkrpNYE7alwt25ChFkGDFpRYx7ERorn")'}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                        <div className="absolute top-4 left-4">
                            <span className="px-2 py-1 bg-primary-sky/20 backdrop-blur-md text-primary-sky text-xs font-bold rounded border border-primary-sky/30 uppercase tracking-wider">Breaking News</span>
                        </div>
                        <div className="absolute bottom-0 p-6 w-full">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-mono text-xs text-primary-sky">CLARIN • LIVE</span>
                                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                <span className="font-mono text-xs text-gray-400">10 MIN AGO</span>
                            </div>
                            <h2 className="text-3xl font-bold leading-tight mb-2 text-white group-hover:text-primary-sky transition-colors">Economic Shifts in Buenos Aires: Market Reaction to New Policies</h2>
                            <p className="text-gray-300 line-clamp-2 mb-4 text-sm max-w-xl">Comprehensive analysis of the latest market trends and policy changes affecting the capital region.</p>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-2">
                                <div className="flex items-center gap-2">
                                    <span className="icon text-gray-400 text-sm">trending_up</span>
                                    <span className="text-xs font-mono text-gray-400">MERVAL +2.4%</span>
                                </div>
                            </div>
                        </div>
                     </div>

                     {/* Sports */}
                     <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 glass-panel rounded-xl p-0 flex flex-col overflow-hidden relative group cursor-pointer hover:border-primary-sky/30 transition-all">
                        <div className="h-1/2 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAv85m8b5tGViqCkvtCJH3x5TNS9VjYH--cVBBU0nw2m8O1LWBmtMmrNkGd0lzux8aAFf6zanSHzh45PXMjOeMixspznp_HFBM0Vrwk5luvVBCDuT0IoaYULV3cVPNw6r0oC-WZV4-dTo6Hy8CLpoXnVWwiQ2EjTfeWewB6Xwv3QskjnlYwcz-hV_VX_ukxxRO8a3-jSEAMwyoR91NrkBraHZeCR8bVliklloI8MGZVAKkzS2IiQg7tccNrK5eOILMIAd2s8nQQB7q9")'}}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-1.5 rounded-full border border-white/10"><span className="icon text-white text-sm block">bookmark</span></div>
                        </div>
                        <div className="p-5 flex flex-col flex-1 justify-between bg-[#141414]">
                            <div>
                                <span className="text-xs font-mono text-blue-400 mb-2 block">SPORTS • AFA</span>
                                <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-primary-sky transition-colors">Scaloni Announces Squad for Qualifiers</h3>
                                <p className="text-sm text-gray-400 line-clamp-3">Messi returns to the list as the national team prepares for the upcoming double fixture.</p>
                            </div>
                            <div className="flex items-center justify-between mt-4 font-mono text-xs text-gray-500">
                                <span>ID: #AR-9921</span>
                                <span>2H AGO</span>
                            </div>
                        </div>
                     </div>

                     {/* Compacts */}
                     <div className="glass-panel rounded-xl p-5 flex flex-col justify-between group cursor-pointer relative overflow-hidden hover:bg-white/5">
                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity"><span className="icon text-gray-400 text-sm">share</span></div>
                        <div>
                             <div className="flex items-center justify-between mb-3">
                                 <span onClick={() => onNavigate('tech')} className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">TECH</span>
                                 <span className="icon text-purple-400 text-lg">bolt</span>
                             </div>
                             <h3 className="text-base font-semibold leading-snug mb-2 text-gray-100 group-hover:text-white">Startups in Palermo Soho Boom</h3>
                        </div>
                        <div className="mt-auto pt-4 border-t border-dashed border-gray-700">
                             <div className="flex items-center gap-2">
                                <div className="size-4 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj0oMvt36iLSdDMeq8qPENuHbs2N5KVNXGkXJcwaXpr2FXfR3RB3Bkk94lZnvsvRh1cnAjmakBLhfCwrHg_ni2hO2C3e2lZ4R_rgL05LC2c45UCz5D9DZYgetJLtYXdt-4zUUvkc_z7JACzrRhUtXu6YhXhI0NX-CZAuAqcnnVCPXb4NUC_nGzJOoi1lZrmhTjnygdBMpK8BTeAF6KMteXT0wnYkGzvh61HuMtSMfEv4qrSN2h1G_3y9XEI4jN7qSzqe_h8FrQ_6yB"/></div>
                                <span className="text-xs font-mono text-gray-400">INFOBAE</span>
                                <span className="text-xs font-mono text-gray-600 ml-auto">4H AGO</span>
                             </div>
                        </div>
                     </div>

                     <div className="glass-panel rounded-xl p-0 flex flex-col overflow-hidden group cursor-pointer">
                        <div className="h-32 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHjZpYGYCZBO1C1-NuyiUL5c88_ytjy7OgEfEY5IL36lo_6oHUL-fIVQCOj4PNjnytaqC3-TyCELggModxA7uoM02P8pWqli5_V2UN1qPXyxYYLoqbmbunAv5Nyg8IZ9AbLgZEcS2_5HOFuq4ST2fR1nFleEb9J-F0AZYf9hoIq0ForkAYl-jN3yGqwQxj26JLd4gTYAO0MXvxl0LTNmi0uXnWjFaUyUzWlfoZg4S3BkBHcRME4VtZI3roppvWtA4P8tLADJBFs0hP")'}}></div>
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                        <div className="p-4 flex flex-col flex-1 justify-between bg-[#141414]">
                            <h3 className="text-base font-semibold leading-snug text-gray-100">Severe Weather Alert: Patagonia</h3>
                            <div className="flex items-center justify-between mt-2 font-mono text-[10px] text-gray-500 uppercase">
                                <span>SMN.gob.ar</span>
                                <span className="text-yellow-500 flex items-center gap-1"><span className="icon text-[12px]">warning</span> Alert</span>
                            </div>
                        </div>
                     </div>

                     {/* Dollar Blue */}
                     <div className="glass-panel rounded-xl p-5 flex flex-col justify-between group cursor-pointer relative hover:border-green-500/30">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all"></div>
                        <div>
                             <span className="text-xs font-mono text-green-400 mb-2 block">MARKETS</span>
                             <h3 className="text-lg font-bold text-white mb-2">Dollar Blue Update</h3>
                             <div className="flex items-end gap-2 mb-1">
                                 <span className="text-3xl font-mono font-bold text-white">1,025</span>
                                 <span className="text-sm font-mono text-red-400 mb-1">▼ 0.5%</span>
                             </div>
                             <p className="text-xs text-gray-500">Updated: 15 min ago</p>
                        </div>
                        <div className="h-10 w-full flex items-end gap-1 mt-4 opacity-50">
                            {[40, 70, 30, 90, 50, 60].map((h, i) => <div key={i} className="w-1/6 bg-green-500 rounded-t-sm" style={{height: `${h}%`, opacity: 0.5 + (i * 0.1)}}></div>)}
                        </div>
                     </div>
                 </div>
             </div>
          </div>
      </main>
    </div>
  );
}