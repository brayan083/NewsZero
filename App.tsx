import React, { useState } from 'react';
import HomeView from './views/HomeView';
import TechView from './views/TechView';
import ArgentinaView from './views/ArgentinaView';
import CryptoView from './views/CryptoView';
import GlobalView from './views/GlobalView';
import EmptyStateView from './views/EmptyStateView';

export type ViewType = 'home' | 'tech' | 'argentina' | 'crypto' | 'global' | 'empty';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const navigate = (view: string) => {
    setCurrentView(view as ViewType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen font-display bg-[#0a0a0a] text-white overflow-x-hidden">
      
      {/* View Rendering */}
      {currentView === 'home' && <HomeView onNavigate={navigate} />}
      {currentView === 'tech' && <TechView onNavigate={navigate} />}
      {currentView === 'argentina' && <ArgentinaView onNavigate={navigate} />}
      {currentView === 'crypto' && <CryptoView onNavigate={navigate} />}
      {currentView === 'global' && <GlobalView onNavigate={navigate} />}
      {currentView === 'empty' && <EmptyStateView onNavigate={navigate} />}

    </div>
  );
}