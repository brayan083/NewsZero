import React from 'react';

export default function HomeView({ onNavigate }: { onNavigate: (view: string) => void }) {
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
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="size-10 relative flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary-purple/20 transition-colors">
              <span className="icon text-white">bolt</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex flex-col leading-none">
              NewsZero
              <span className="text-[10px] text-gray-400 font-mono font-normal tracking-widest uppercase opacity-70">Aggregator v2.0</span>
            </h1>
          </div>
          <button 
            onClick={() => onNavigate('empty')}
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
          
          {/* Hero Card */}
          <div className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-2xl relative overflow-hidden group cursor-pointer min-h-[400px]" onClick={() => onNavigate('tech')}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA_Lh6rkwQt6O1HW2zeNgwnqmUyb3IK_7ozuSgIxMqkhs8bmILh4XP6WCEUi9OPjmyM6u0RKmk6JMgoe28gqlsA7Nf-SX21Iy5KelcSuiSRudVuLHmpZgn_R16O_nQRcnjcPD64SrK5d9zak-Fl_XAG4c6YFb0tt223_KwI6JpLCVdueRSlbnBlcALChMz6WG2Be76LfIGjVqxER_5T8IvYS7MA5mHPkRLkFl8Lcsvi78t4SJIfy7RjKgk-xgFPqeXMa6MIx3XaKhu")'}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary-purple/20 text-primary-purple border border-primary-purple/30 backdrop-blur-md">
                BREAKING
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary-purple font-mono text-xs uppercase tracking-wider">Tech</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-gray-400 font-mono text-xs">2h ago</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight group-hover:text-primary-purple transition-colors">
                AI Model Predicts Major Market Shift Before Wall Street
              </h2>
              <p className="text-gray-300 line-clamp-2 max-w-xl text-sm md:text-base leading-relaxed">
                An in-depth look at how the latest neural networks are reshaping financial strategies and what it means for the global economy.
              </p>
            </div>
          </div>

          {/* Snapshot List */}
          <div className="col-span-1 row-span-2 glass-card rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Market Snapshot</h3>
              <span className="icon text-gray-400">trending_up</span>
            </div>
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
              {[
                { label: 'BTC/USD', val: '+5.2%', desc: 'Bitcoin breaks resistance at $65k amid ETF rumors', color: 'text-yellow-400', accent: 'text-green-400', link: 'crypto' },
                { label: 'MERVAL', val: '-1.4%', desc: 'Argentina stocks dip following new central bank policy', color: 'text-cyan-400', accent: 'text-red-400', link: 'argentina' },
                { label: 'NVDA', val: '+2.8%', desc: 'NVIDIA announces new AI chip architecture', color: 'text-purple-400', accent: 'text-green-400', link: 'tech' },
                { label: 'ETH/USD', val: '+3.1%', desc: 'Ethereum gas fees hit 6-month low', color: 'text-blue-400', accent: 'text-green-400', link: 'crypto' },
              ].map((item, i) => (
                <div key={i} onClick={() => onNavigate(item.link)} className="group/item cursor-pointer border-b border-white/5 pb-4 last:border-0 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className={`${item.color} font-mono text-xs`}>{item.label}</span>
                    <span className={`${item.accent} font-mono text-xs`}>{item.val}</span>
                  </div>
                  <p className={`text-sm font-medium text-white leading-snug group-hover/item:${item.color} transition-colors`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => onNavigate('crypto')} className="w-full mt-4 py-2 text-xs font-mono text-center text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded bg-white/5 transition-all">
              View Full Report
            </button>
          </div>

          {/* Crypto Card */}
          <div onClick={() => onNavigate('crypto')} className="col-span-1 glass-card rounded-2xl flex flex-col relative overflow-hidden group cursor-pointer min-h-[240px]">
            <div className="h-40 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwc8WS97A181BrGBsHWw07jU7kQTtFj-heQx3uaPfUOlJ5CU4bUrKnCio3x42uR-GmWDNyYG9ldUssk_q6emIO5VrwXxocN7MrKQZQdBypNFTiCzR4gZSnAGliWO91W0exDE9s-4aN-6BasJwY79YUc_eVUmslpngYDuwLROxUpYtS7Z2U39Z3S5qPV1Jd_fHQ-HIjq3XDMuG-yw1yc9YWGzfJ90P-Mcpe1iNGYgBVAwNB-Aj-c_2IlfmuMmBYsRH_FH3b9ksBVFDo")'}}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-yellow-400 font-mono text-xs">Cripto</span>
                <span className="text-gray-500 font-mono text-xs">45m ago</span>
              </div>
              <h3 className="text-base font-bold text-white leading-tight mb-2 group-hover:text-yellow-400 transition-colors">
                SEC Delays Decision on New Crypto Regulations
              </h3>
            </div>
          </div>

          {/* Argentina Card */}
          <div onClick={() => onNavigate('argentina')} className="col-span-1 glass-card rounded-2xl flex flex-col relative overflow-hidden group cursor-pointer min-h-[240px]">
             <div className="h-40 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqS2ejhh4RvJ1c4bG0BCTLYruurpTk-7vMALOzTROUgoD6pTFHlVRQqwFFy0VrumqX40o9woD2KszaXP9LiRAbHKX1YU7ojvESKry5OcB5UJfa73IXUcD-1btMvz1xfmprz3UbMY8At7tz0Pz01syxYbc504SlJlMFkNk6jPjhcXdAmyujZJf-ZKzQI23Tsnaxkz9Jkn8J9fKeFsXzcHt8uHHdPxL6ViydwocRAm64jwiJ_1DoEGdc4l8rOApbucXqJvU1MbSWA9RS")'}}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-cyan-400 font-mono text-xs">Argentina</span>
                <span className="text-gray-500 font-mono text-xs">1h ago</span>
              </div>
              <h3 className="text-base font-bold text-white leading-tight mb-2 group-hover:text-cyan-400 transition-colors">
                Buenos Aires Tech Hub Attracts Global Startups
              </h3>
            </div>
          </div>

          {/* Global Text Card */}
           <div onClick={() => onNavigate('global')} className="col-span-1 glass-card rounded-2xl p-5 flex flex-col justify-between group cursor-pointer hover:border-white/30 min-h-[240px]">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <span className="icon text-[18px]">public</span>
                </span>
                <span className="text-gray-500 font-mono text-xs">Global • 3h ago</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug mb-2">
                UN Summit Reaches Agreement on Climate Action Targets
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                Delegates from 190 countries have signed a historic pact to reduce carbon emissions by 40% before 2030.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs font-mono text-gray-500">
              <span>Reuters</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Tech Card */}
          <div onClick={() => onNavigate('tech')} className="col-span-1 glass-card rounded-2xl flex flex-col relative overflow-hidden group cursor-pointer min-h-[240px]">
            <div className="h-40 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN0H9WiRV2bOo04XKEPSfMzRwUW11oFWPet0LYBqn2FOvI8u4RgpW0aYXeByvSEaYPQCKyUOB4YRKVNQkQmubiFI0-i3pQXsmpHKM4SWA9H4M5PHFU2ge-N7-nJ_laVU2x8UEjCceynFMlb6AEwzytT0UXy9kHCmp0Se6Xd5WlNuGPJdbARISEw0jP-xdSfuYkGm-oPbA1rTp5sxGFrkNMHTd8fM90Hk2uvIPGv4U_qWrUlE1Kxq9v_WVIkMVSmuUZefp1ASEDmpq1")'}}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-400 font-mono text-xs">Tech</span>
                <span className="text-gray-500 font-mono text-xs">4h ago</span>
              </div>
              <h3 className="text-base font-bold text-white leading-tight mb-2 group-hover:text-purple-400 transition-colors">
                Quantum Computing Breakthrough: Error Correction Solved?
              </h3>
            </div>
          </div>

           {/* Security Wide Card */}
          <div className="col-span-1 md:col-span-2 glass-card rounded-2xl flex relative overflow-hidden group cursor-pointer min-h-[240px]">
             <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4uPjmNkVl7xxyLZlkXgojPtcmxPXfbrDdrBzmnsL2x_IB11bQ8k-zlkgngx017qF6lSciGIxy1C9ZfK8_J4ENGFyz-pWbpIcGiMdPaSLxlvf5z-GsD3jx7s0DTh6pI_z_Vn-3ixB0iVk-P8xTo8eQeh0uTmu3GP1FwPCJP56O1J-IhZNGUEsaHZUmKj_d-0EjlJOgRCrU0u06i3T_pi-3Pn1VnBLDm7xEZ7HBCGAUub7L1cIVfP9ZcQwzhhCPrkJGqiQg4KQGwa0E")'}}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="relative p-6 md:p-8 flex flex-col justify-center max-w-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-red-400 font-mono text-xs uppercase">Security</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-gray-400 font-mono text-xs">5h ago</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Major Data Breach Hits Social Platform X
              </h2>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                Experts warn users to change passwords immediately as millions of accounts are reportedly compromised.
              </p>
              <button className="self-start flex items-center gap-2 text-xs font-mono font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/5">
                Read Analysis <span className="icon text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Dock */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-lg">
          <div className="glass-panel rounded-full p-2 flex items-center justify-between shadow-2xl shadow-black/50">
            <button 
              onClick={() => onNavigate('home')}
              className="relative flex items-center justify-center h-10 px-6 rounded-full bg-primary-purple text-white font-medium text-sm transition-all shadow-[0_0_15px_-3px_rgba(127,19,236,0.5)]"
            >
              All
            </button>
             <button 
               onClick={() => onNavigate('argentina')}
               className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-all text-sm font-medium gap-2 group"
             >
              <span className="icon text-[18px] group-hover:animate-pulse">location_on</span>
              <span className="hidden sm:inline">Argentina</span>
            </button>
            <button 
              onClick={() => onNavigate('global')}
              className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium gap-2"
            >
              <span className="icon text-[18px]">public</span>
              <span className="hidden sm:inline">Global</span>
            </button>
             <button 
               onClick={() => onNavigate('tech')}
               className="flex items-center justify-center h-10 px-4 rounded-full text-gray-400 hover:text-purple-400 hover:bg-white/5 transition-all text-sm font-medium gap-2 group"
             >
              <span className="icon text-[18px] group-hover:animate-pulse">memory</span>
              <span className="hidden sm:inline">Tech</span>
            </button>
             <button 
               onClick={() => onNavigate('crypto')}
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