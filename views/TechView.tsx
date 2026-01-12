import React from 'react';

export default function TechView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f12] text-white">
      {/* Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{background: 'radial-gradient(circle at 15% 50%, rgba(127, 19, 236, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(50, 40, 90, 0.2), transparent 25%)'}}></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#141419]/60 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 text-white group cursor-pointer" onClick={() => onNavigate('home')}>
                  <div className="size-8 text-primary-purple">
                    <span className="icon text-[32px]">bolt</span>
                  </div>
                  <h2 className="text-white text-xl font-bold tracking-tight">NewsZero<span className="text-primary-purple">.</span></h2>
                </div>
                <nav className="hidden md:flex items-center gap-1">
                  <button onClick={() => onNavigate('home')} className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg">Home</button>
                  <button onClick={() => onNavigate('tech')} className="px-4 py-2 text-sm font-bold text-white transition-colors rounded-lg bg-white/5">Tech</button>
                  <button onClick={() => onNavigate('crypto')} className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg">Finance</button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg">Science</button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg">Design</button>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                 <div className="hidden lg:flex relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary-purple transition-colors">
                      <span className="icon text-[20px]">search</span>
                    </div>
                    <input className="bg-[#1e1e24] border border-white/5 text-white text-sm rounded-lg focus:ring-1 focus:ring-primary-purple focus:border-primary-purple block w-64 pl-10 p-2 placeholder-gray-500 transition-all font-mono" placeholder="Search news..." type="text"/>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-xs text-gray-600 font-mono border border-gray-700 rounded px-1.5 py-0.5">⌘K</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center size-9 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                      <span className="icon text-[24px]">notifications</span>
                    </button>
                    <button className="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg bg-primary-purple hover:bg-[#680fc2] text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(127,19,236,0.4)]">
                        Subscribe
                    </button>
                     <div className="size-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px]">
                        <div className="size-full rounded-full bg-[#1e1e24] flex items-center justify-center">
                          <span className="text-xs font-bold font-mono">NZ</span>
                        </div>
                    </div>
                  </div>
              </div>
           </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
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
               <button className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 text-sm font-medium hover:text-white hover:border-gray-600 transition-all">
                  <span className="icon text-[18px]">rocket_launch</span>
                   Startups
               </button>
               <button className="size-9 flex items-center justify-center rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 hover:text-white hover:border-gray-600 transition-all ml-2">
                  <span className="icon text-[20px]">tune</span>
               </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            
            {/* Main Featured */}
            <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group border border-white/5">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZhIgHPb-NmNXwZmrKNJ28xc4G49XR-a4VdOxXbNTBPR0-1PsLxB1Blj871uaTbZjvhuZiAXK3VNM6V1VrUVPe2UGAvm26ePQqiwmlNVuzcbF_WXDouxg9lK7_dK0FKPbMn5ZaGhPQcYJ28Tgfzum9jeoFY_Eb0MrqPXKUTqfmsKcieFHydLWkXPQAZW-n_qM38Uam-JRrljTLwuFuErU1CbyLwct64qHiV-dVy49yjC-S7Dpk_6T636b9JwFPj-YDo0Bl0z1UqDM")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/60 to-transparent"></div>
                 <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-primary-purple uppercase tracking-wider">Featured</span>
                </div>
                 <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
                      <span className="flex items-center gap-1"><span className="icon text-[14px]">schedule</span> 2h ago</span>
                      <span className="text-gray-600">|</span>
                      <span className="flex items-center gap-1 text-primary-purple"><span className="icon text-[14px]">public</span> TechCrunch</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-primary-purple transition-colors">The Future of Generative AI: Beyond Chatbots</h2>
                    <p className="text-gray-300 line-clamp-2 text-sm md:text-base max-w-[90%]">
                        As models grow larger and more efficient, the next wave of AI isn't just about text—it's about reasoning, creativity, and multimodal interaction.
                    </p>
                </div>
            </div>

            {/* Apple Vision Pro */}
            <div className="md:col-span-1 md:row-span-2 glass-panel rounded-xl p-5 flex flex-col gap-4 group">
                 <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJ2374SpieHLqIwVsVn0ol6Sa6Jifksu_jtvpe5HxfJv0BkJxjrt7kDloPXHUI2aCrqwp6zwbM0fL1J93rI-gXhCBEtZHnBjA2vxhaJZ0DpVFBhOepbJjugIKafJkEwGkrfrUKFvaKsHsAS6s5D3DAON6fvVeUIMa7FDKYxwBUqU2GUMGXQMmE7uIF2aLs-Y4PBUo6gVsOskoHgcXJzNbh_c9uA57ly8to0Lr4kKrTW6UutIbgPWRAHtLWlRDaL1e40T5iZ-MJEuAE")'}}></div>
                    <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white">HARDWARE</div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span>The Verge</span>
                        <span>45m ago</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary-purple transition-colors">Apple's Vision Pro update brings spatial personas</h3>
                    <p className="text-xs text-gray-400 line-clamp-3">
                         The latest visionOS update transforms isolation into collaboration, allowing users to "hang out" in virtual space.
                    </p>
                </div>
                 <button className="mt-auto w-full py-2 rounded bg-white/5 hover:bg-primary-purple/20 text-xs font-bold text-white border border-white/5 hover:border-primary-purple/50 transition-all flex items-center justify-center gap-2">
                        Read Analysis <span className="icon text-[14px]">arrow_forward</span>
                </button>
            </div>

            {/* Stats Ticker */}
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

             {/* Small Card */}
            <div className="glass-panel rounded-xl p-4 flex flex-col gap-3 hover:border-primary-purple/50 transition-colors cursor-pointer group">
                 <div className="flex items-start justify-between">
                    <div className="size-8 rounded bg-[#1e1e24] flex items-center justify-center text-white border border-white/5">
                        <span className="icon text-[18px]">currency_bitcoin</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">ID:8829</span>
                </div>
                 <h4 className="text-sm font-bold text-white group-hover:text-primary-purple transition-colors line-clamp-2">Bitcoin halving event: What miners are expecting</h4>
                 <div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-gray-400">
                    <span className="text-primary-purple">CoinDesk</span>
                    <span>•</span>
                    <span>14m ago</span>
                </div>
            </div>
            
            {/* Copilot Card */}
             <div className="md:col-span-2 glass-panel rounded-xl p-0 flex flex-row overflow-hidden group h-[180px]">
                <div className="w-1/3 bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARWvncwMJ8QRARxhimrRytsMncbMKDwyekYVhco7mAF_16KRkUlKB653xW4P9hxaWy19xzq0JTk8yYo0GYXRbeAUeS07nGEVytKcFk77ClP_uHQHr8SeDcKe-IqTNfkEh2_4p7OZcIUSOhgv_KlKibc0XYaAdXFcBal7ljpRwkVP3Qyd0X4yzopC51mJ1XnE_ZpW87r4QXGm1vabVnW7is3bsAFOoF7EZoRI4jNYnmyaD3N6e3s-1ZmCB_KlWjqovkE8uC3p72nMys")'}}>
                     <div className="absolute inset-0 bg-primary-purple/10 mix-blend-overlay"></div>
                </div>
                <div className="w-2/3 p-5 flex flex-col justify-center gap-2">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="size-2 rounded-full bg-yellow-500 animate-pulse"></span>
                        <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase">Breaking</span>
                    </div>
                     <h3 className="text-lg font-bold text-white group-hover:text-primary-purple transition-colors">GitHub Copilot Enterprise is now generally available</h3>
                     <p className="text-xs text-gray-400 line-clamp-2">Microsoft's AI coding assistant gets a massive upgrade for enterprise customers.</p>
                     <div className="mt-3 flex items-center gap-4 text-[11px] font-mono text-gray-500">
                         <div className="flex items-center gap-1"><span className="icon text-[14px]">person</span> Microsoft Blog</div>
                         <div className="flex items-center gap-1"><span className="icon text-[14px]">schedule</span> 3h ago</div>
                     </div>
                </div>
             </div>
             
             {/* Small Card 2 */}
            <div className="glass-panel rounded-xl p-4 flex flex-col gap-3 hover:border-primary-purple/50 transition-colors cursor-pointer group">
                 <div className="flex items-start justify-between">
                    <div className="size-8 rounded bg-[#1e1e24] flex items-center justify-center text-white border border-white/5">
                        <span className="icon text-[18px]">design_services</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">ID:4012</span>
                </div>
                 <h4 className="text-sm font-bold text-white group-hover:text-primary-purple transition-colors line-clamp-2">Adobe Firefly integrates directly into Substance 3D</h4>
                 <div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-gray-400">
                    <span className="text-primary-purple">Creative Bloq</span>
                    <span>•</span>
                    <span>5h ago</span>
                </div>
            </div>
            
            {/* Quick Bites */}
            <div className="glass-panel rounded-xl p-5 flex flex-col gap-4">
                 <h3 className="text-sm font-bold text-white border-b border-gray-800 pb-2">Quick Bites</h3>
                 <div className="flex flex-col gap-4 overflow-y-auto pr-1">
                    {[
                        {src: 'WIRED', time: '10m', txt: 'Humane AI Pin reviews are out, and they are brutal.'},
                        {src: 'ArsTechnica', time: '1h', txt: 'NASA fixes Voyager 1 from 15 billion miles away.'},
                        {src: 'Engadget', time: '3h', txt: 'TikTok launches a new photo-sharing app called Notes.'},
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-[10px] font-mono text-primary-purple">{item.src}</span>
                                <span className="text-[10px] font-mono text-gray-500">{item.time}</span>
                            </div>
                            <p className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">{item.txt}</p>
                        </div>
                    ))}
                 </div>
            </div>

        </div>
      </main>
    </div>
  );
}