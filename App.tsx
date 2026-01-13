import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomeView from './views/HomeView';
import TechView from './views/TechView';
import ArgentinaView from './views/ArgentinaView';
import CryptoView from './views/CryptoView';
import GlobalView from './views/GlobalView';
import EmptyStateView from './views/EmptyStateView';

// export type ViewType = 'home' | 'tech' | 'argentina' | 'crypto' | 'global' | 'empty';


export default function App() {
  const navigate = useNavigate();

  const handleNavigate = (view: string) => {
    const path = view === 'home' ? '/' : `/${view}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-display bg-[#0a0a0a] text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/tech" element={<TechView onNavigate={handleNavigate} />} />
        <Route path="/argentina" element={<ArgentinaView onNavigate={handleNavigate} />} />
        <Route path="/crypto" element={<CryptoView onNavigate={handleNavigate} />} />
        <Route path="/global" element={<GlobalView onNavigate={handleNavigate} />} />
        <Route path="/empty" element={<EmptyStateView onNavigate={handleNavigate} />} />
      </Routes>
    </div>
  );
}