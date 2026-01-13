import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="relative min-h-screen bg-[#0a0a0a] pb-32 font-display text-white">
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

                {/* content */}
                {children}

                {/* Floating Dock */}
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-lg">
                    <div className="glass-panel rounded-full p-2 flex items-center justify-between shadow-2xl shadow-black/50">
                        <button
                            onClick={() => navigate('/')}
                            className={`relative flex items-center justify-center h-10 px-6 rounded-full font-medium text-sm transition-all ${isActive('/') ? 'bg-primary-purple text-white shadow-[0_0_15px_-3px_rgba(127,19,236,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => navigate('/argentina')}
                            className={`flex items-center justify-center h-10 px-4 rounded-full transition-all text-sm font-medium gap-2 group ${isActive('/argentina') ? 'text-cyan-400 bg-white/10' : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'}`}
                        >
                            <span className={`icon text-[18px] ${isActive('/argentina') ? '' : 'group-hover:animate-pulse'}`}>location_on</span>
                            <span className="hidden sm:inline">Argentina</span>
                        </button>
                        <button
                            onClick={() => navigate('/global')}
                            className={`flex items-center justify-center h-10 px-4 rounded-full transition-all text-sm font-medium gap-2 group ${isActive('/global') ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className="icon text-[18px]">public</span>
                            <span className="hidden sm:inline">Global</span>
                        </button>
                        <button
                            onClick={() => navigate('/tech')}
                            className={`flex items-center justify-center h-10 px-4 rounded-full transition-all text-sm font-medium gap-2 group ${isActive('/tech') ? 'text-purple-400 bg-white/10' : 'text-gray-400 hover:text-purple-400 hover:bg-white/5'}`}
                        >
                            <span className={`icon text-[18px] ${isActive('/tech') ? '' : 'group-hover:animate-pulse'}`}>memory</span>
                            <span className="hidden sm:inline">Tech</span>
                        </button>
                        <button
                            onClick={() => navigate('/crypto')}
                            className={`flex items-center justify-center h-10 px-4 rounded-full transition-all text-sm font-medium gap-2 group ${isActive('/crypto') ? 'text-yellow-400 bg-white/10' : 'text-gray-400 hover:text-yellow-400 hover:bg-white/5'}`}
                        >
                            <span className={`icon text-[18px] ${isActive('/crypto') ? '' : 'group-hover:animate-pulse'}`}>currency_bitcoin</span>
                            <span className="hidden sm:inline">Cripto</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
