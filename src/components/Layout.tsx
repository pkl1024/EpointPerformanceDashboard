import React from 'react';
import { LayoutDashboard, User, Users, Target, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const navItems = [
    { id: 'overview', label: '概览', icon: LayoutDashboard },
    { id: 'personal', label: '个人', icon: User },
    { id: 'team', label: '团队', icon: Users },
    { id: 'goals', label: '目标', icon: Target },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 p-4 lg:p-12">
      {/* Mobile Shell Container with Device Frame Proportions */}
      <div className="w-full max-w-[400px] aspect-[9/16] max-h-[90vh] bg-surface shadow-2xl relative flex flex-col overflow-hidden rounded-[2.5rem] border-[10px] border-slate-800 ring-4 ring-slate-800/10 transition-all duration-500 ease-in-out">
        
        {/* Notch Area (Classic pill shape) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-[60] flex items-center justify-center">
          <div className="w-8 h-1 bg-slate-700/50 rounded-full mb-0.5"></div>
        </div>

        {/* Top App Bar (Relative to shell) */}
        <header className="sticky top-0 w-full z-50 h-[60px] glass-card shadow-sm flex justify-between items-center px-4 pt-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
              <span className="text-white font-black text-xl italic tracking-tighter">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-primary leading-none tracking-widest uppercase">Epoint</span>
              <h1 className="font-bold text-sm text-slate-900 leading-tight">新点效能看板</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-50 transition-colors rounded-lg active:scale-95 text-slate-500">
              <Filter size={20} />
            </button>
          </div>
        </header>

        {/* Main Content (Scrollable area) */}
        <main className="flex-grow overflow-y-auto overflow-x-hidden scroll-smooth">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="px-5 py-6 pb-28"
          >
            {children}
          </motion.div>
        </main>

        {/* Bottom Nav (Mobile Shell Sticky) */}
        <nav className="absolute bottom-0 left-0 w-full flex justify-around items-center h-[76px] px-2 pb-6 bg-white/95 backdrop-blur-md border-t border-slate-100 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-4 transition-all flex-1 h-full ${
                activeTab === item.id ? 'text-primary' : 'text-slate-400'
              }`}
            >
              <item.icon size={20} fill={activeTab === item.id ? "currentColor" : "none"} />
              <span className="text-[10px] font-bold mt-1 tracking-tight">{item.label}</span>
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeTabMobile"
                  className="absolute w-8 h-1 bg-primary rounded-full top-0"
                />
              )}
            </button>
          ))}
          {/* Home Indicator Mimic */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full"></div>
        </nav>
      </div>
    </div>
  );
}
