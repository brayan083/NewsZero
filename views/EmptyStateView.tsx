import React from 'react';

export default function EmptyStateView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-display text-white relative overflow-hidden">
        {/* Background Radial */}
        <div className="fixed inset-0 pointer-events-none z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-purple/15 to-transparent opacity-60"></div>
        </div>

        <header className="relative z-10 w-full px-6 py-4 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0">
             <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 text-white cursor-pointer" onClick={() => onNavigate('home')}>
                    <div className="size-6 text-primary-purple"><span className="icon text-[24px]">newspaper</span></div>
                    <h1 className="text-white text-xl font-bold tracking-tight">NewsZero</h1>
                </div>
                <button className="glass-panel group flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-white/20 transition-all">
                    <span className="icon text-[18px]">calendar_today</span>
                    <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200">Select Date</span>
                </button>
             </div>
        </header>

        <main className="relative z-10 flex-grow flex items-center justify-center p-6">
            <div className="w-full max-w-2xl">
                <div className="glass-panel rounded-2xl p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                     <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary-purple/10 to-transparent opacity-50 pointer-events-none"></div>
                     
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-purple opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-purple"></span>
                        </span>
                        <span className="font-mono text-xs text-primary-purple tracking-wide">NO_DOCUMENTS_FOUND</span>
                        <span className="w-px h-3 bg-white/10 mx-1"></span>
                        <span className="font-mono text-xs text-gray-400">2026-01-11</span>
                     </div>
                     
                     <div className="relative w-64 h-64 mb-6">
                        <div className="absolute inset-0 bg-primary-purple/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
                        <div className="relative z-10 w-full h-full bg-center bg-contain bg-no-repeat animate-float" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8vxjJZE65t5LJ8zOlVnuKOs2eT1lQUJtYHHZhNqVgkslFHOzo5zoqVRKVoVUPMsILc7K92nvEUvX1-4lJkmg3oDXwC2T6VJRGX7pSXTXJOI569QgmRaUc-TCGQVKPDo0-wOWtGplzf-tgH5rmztu5wQpcE1NBoc2fjcMNKZ9g6kkjqlR3KUhcyJlrJnPBoLjdFUn2cXMnefqt0J7PQz_XUj4ikoQPc5ARRAdQOih3xj9OYNxyA6fGVFis8Ue5MNsqvfvfTwrwlPFb")'}}></div>
                     </div>

                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">All Quiet on the Digital Front</h2>
                     <p className="text-gray-400 text-base md:text-lg max-w-md mb-10 leading-relaxed font-light">
                        Our news bots seem to be recharging. We couldn't find any articles published on <span className="text-gray-300 font-medium">Jan 11, 2026</span>.
                     </p>
                     
                     <button onClick={() => onNavigate('home')} className="relative group cursor-pointer overflow-hidden rounded-xl bg-primary-purple px-8 py-3.5 transition-all hover:bg-primary-purple/90 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(127,19,236,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <div className="flex items-center justify-center gap-2">
                            <span className="icon text-white text-[20px]">undo</span>
                            <span className="text-white font-semibold text-sm tracking-wide">Back to Today</span>
                        </div>
                     </button>
                </div>
                
                <div className="mt-8 flex justify-center gap-6 text-center">
                    <a href="#" className="text-gray-500 text-xs hover:text-primary-purple transition-colors font-mono">Archive Search</a>
                    <span className="text-gray-700 text-xs">•</span>
                    <a href="#" className="text-gray-500 text-xs hover:text-primary-purple transition-colors font-mono">Status Page</a>
                     <span className="text-gray-700 text-xs">•</span>
                    <a href="#" className="text-gray-500 text-xs hover:text-primary-purple transition-colors font-mono">Report Issue</a>
                </div>
            </div>
        </main>
    </div>
  );
}