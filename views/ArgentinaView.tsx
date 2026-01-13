import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import NewsCard from '../components/NewsCard';
import { useNews } from '../hooks/useNews';

export default function ArgentinaView({ onNavigate }: { onNavigate?: (view: string) => void }) {
    const [time, setTime] = useState('');
    const { news, loading } = useNews('Argentina');

    useEffect(() => {
        setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
        const i = setInterval(() => setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })), 60000);
        return () => clearInterval(i);
    }, []);

    return (
        <DashboardLayout>
            {/* Page Title & Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pt-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-sky opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-sky"></span>
                        </span>
                        <p className="text-primary-sky font-mono text-xs font-medium tracking-wider uppercase">Buenos Aires • {time}</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Argentina</h1>
                    <p className="text-gray-400 mt-2 max-w-lg">Local coverage, politics, economics, and sports from top national sources.</p>
                </div>

                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                    <button className="px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-white text-sm font-medium hover:border-primary-sky/50 transition-all">
                        All
                    </button>
                    {['Economy', 'Sports', 'Politics', 'Society'].map(t => (
                        <button key={t} className="px-4 py-2 rounded-lg bg-[#1e1e24] border border-white/5 text-gray-400 text-sm font-medium hover:text-white hover:border-gray-600 transition-all">
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                {loading ? (
                    <div className="col-span-full py-20 text-center text-gray-500 font-mono">Loading Argentina news...</div>
                ) : news.length > 0 ? (
                    news.map((item, index) => (
                        <NewsCard
                            key={item.id}
                            title={item.title}
                            category={item.category}
                            timeAgo={item.timeAgo}
                            imageUrl={item.imageUrl}
                            description={item.description}
                            variant={index === 0 ? "hero" : "standard"} // Simple layout logic
                            className={index === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : "md:col-span-1 lg:col-span-1 lg:row-span-2"}
                            categoryColor="text-primary-sky"
                            breaking={index === 0}
                        />
                    ))
                ) : (
                    <div className="col-span-full py-10 text-center text-gray-500">No Argentina news found. Check your database connection.</div>
                )}

                {/* Compacts / List Style Card replacement - using standard card for now or custom glass panel */}
                <div className="glass-panel rounded-xl p-5 flex flex-col justify-between group cursor-pointer relative overflow-hidden hover:bg-white/5 md:col-span-1">
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity"><span className="icon text-gray-400 text-sm">share</span></div>
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">TECH</span>
                            <span className="icon text-purple-400 text-lg">bolt</span>
                        </div>
                        <h3 className="text-base font-semibold leading-snug mb-2 text-gray-100 group-hover:text-white">Startups in Palermo Soho Boom</h3>
                    </div>
                    <div className="mt-auto pt-4 border-t border-dashed border-gray-700">
                        <div className="flex items-center gap-2">
                            <div className="size-4 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj0oMvt36iLSdDMeq8qPENuHbs2N5KVNXGkXJcwaXpr2FXfR3RB3Bkk94lZnvsvRh1cnAjmakBLhfCwrHg_ni2hO2C3e2lZ4R_rgL05LC2c45UCz5D9DZYgetJLtYXdt-4zUUvkc_z7JACzrRhUtXu6YhXhI0NX-CZAuAqcnnVCPXb4NUC_nGzJOoi1lZrmhTjnygdBMpK8BTeAF6KMteXT0wnYkGzvh61HuMtSMfEv4qrSN2h1G_3y9XEI4jN7qSzqe_h8FrQ_6yB" /></div>
                            <span className="text-xs font-mono text-gray-400">INFOBAE</span>
                            <span className="text-xs font-mono text-gray-600 ml-auto">4H AGO</span>
                        </div>
                    </div>
                </div>

                {/* Weather Alert */}
                <NewsCard
                    title="Severe Weather Alert: Patagonia"
                    category="SMN.gob.ar"
                    timeAgo="Alert"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDHjZpYGYCZBO1C1-NuyiUL5c88_ytjy7OgEfEY5IL36lo_6oHUL-fIVQCOj4PNjnytaqC3-TyCELggModxA7uoM02P8pWqli5_V2UN1qPXyxYYLoqbmbunAv5Nyg8IZ9AbLgZEcS2_5HOFuq4ST2fR1nFleEb9J-F0AZYf9hoIq0ForkAYl-jN3yGqwQxj26JLd4gTYAO0MXvxl0LTNmi0uXnWjFaUyUzWlfoZg4S3BkBHcRME4VtZI3roppvWtA4P8tLADJBFs0hP"
                    variant="standard"
                    className="md:col-span-1 h-[200px]"
                >
                    <div className="absolute top-2 right-2 text-yellow-500 flex items-center gap-1 bg-black/50 px-2 py-1 rounded backdrop-blur-md"><span className="icon text-[12px]">warning</span> Alert</div>
                </NewsCard>

                {/* Dollar Blue Widget */}
                <div className="glass-panel rounded-xl p-5 flex flex-col justify-between group cursor-pointer relative hover:border-green-500/30 md:col-span-1">
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
                        {[40, 70, 30, 90, 50, 60].map((h, i) => <div key={i} className="w-1/6 bg-green-500 rounded-t-sm" style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }}></div>)}
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}