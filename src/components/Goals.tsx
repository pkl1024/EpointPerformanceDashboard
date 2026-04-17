import React from 'react';
import { Target, Bell, TreeDeciduous, Map as MapIcon, Plus, ChevronRight, Edit3 } from 'lucide-react';
import { OKRS } from '../data';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Goals() {
  return (
    <div className="space-y-6">
      {/* Banner & Alerts */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-primary-container rounded p-6 text-white flex items-center relative overflow-hidden shadow-lg shadow-primary/20">
          <div className="relative z-10 space-y-2">
            <h2 className="text-2xl font-black tracking-tight leading-tight">2024 Q2 目标回顾</h2>
            <p className="text-white/80 max-w-md text-[11px] font-medium leading-relaxed">
              本季度还剩 <span className="text-white font-bold underline underline-offset-4 decoration-2">12 天</span>，你还有 3 个关键结果未更新进度。及时同步进度有助于团队更好协作。
            </p>
            <button className="mt-2 bg-white text-primary px-4 py-2 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
              立即更新进度
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-40 pointer-events-none mix-blend-soft-light">
             <img 
               src="https://picsum.photos/seed/abstract/600/600" 
               alt="Pattern" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
        
        <div className="bg-white rounded p-5 border-l-4 border-tertiary-container flex flex-col justify-between shadow-sm border border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-tertiary-container mb-2">
              <Bell size={16} className="animate-bounce" />
              <span className="font-black text-[10px] uppercase tracking-widest">更新提醒</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">市场部 A/B 测试报告已发布，相关目标 <span className="font-bold text-slate-700">"转化率提升"</span> 可能需要调整。</p>
          </div>
          <button className="text-primary text-[10px] font-bold flex items-center gap-2 hover:underline mt-4 group uppercase tracking-widest">
            查看详情 <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Alignment View */}
      <section className="bg-slate-50/50 rounded-xl p-4 border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-black text-slate-900 tracking-tight italic">STRATEGY ALIGNMENT</h3>
          <div className="flex p-1 bg-slate-200/50 rounded-lg gap-1">
            <button className="px-2.5 py-1 bg-white shadow-sm rounded text-[8px] font-black text-primary uppercase tracking-wider">TREE</button>
            <button className="px-2.5 py-1 text-[8px] font-black text-slate-400 hover:text-slate-600 uppercase tracking-wider">MAP</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-grow pr-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-primary/10 text-primary text-[7px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest border border-primary/10">CORPORATE</span>
                  <span className="text-primary font-black text-sm tracking-tighter">85%</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm leading-snug tracking-tight uppercase">成为全球领先的数字化提效平台</h4>
              </div>
            </div>
            
            <div className="w-full bg-slate-50 h-1 rounded-full overflow-hidden mb-6">
              <div className="bg-primary h-full transition-all duration-1000" style={{ width: '85%' }}></div>
            </div>

            {/* Department Level Nested (Reduced nesting indent) */}
            <div className="ml-2 space-y-4 border-l border-slate-100 pl-4 relative">
              <div className="bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-900 text-white text-[7px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-widest">DEPT</span>
                    <h5 className="font-bold text-[11px] text-slate-700 leading-tight">产品研发部：自动化全链路</h5>
                  </div>
                  <span className="text-[9px] font-black text-slate-400">62%</span>
                </div>
                
                {/* Personal Level (Reduced visual weight) */}
                <div className="mt-3 ml-1 space-y-2">
                  <div className="flex items-start gap-2.5 p-2 bg-white rounded border border-slate-100/50 transition-all cursor-pointer shadow-sm active:scale-[0.98]">
                    <div className="w-5 h-5 rounded bg-primary/5 flex items-center justify-center shrink-0">
                      <TreeDeciduous size={10} className="text-primary" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-[10px] font-medium text-slate-600 leading-tight">个人：设计 2.0 版新点 UI 系统</p>
                      <div className="mt-1.5 flex items-center gap-2">
                         <div className="flex-grow h-0.5 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-success w-3/4"></div>
                         </div>
                         <span className="text-[7px] font-black text-success uppercase tracking-tighter shrink-0 border border-success/20 px-1 py-0.2 rounded-sm bg-success/5">进行中</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OKR List */}
      <section className="space-y-6 pb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 tracking-tight">我的 OKR 列表</h3>
          <button className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded shadow-lg shadow-primary/20 flex items-center gap-2 active:scale-95 transition-all uppercase tracking-widest">
            <Plus size={16} /> 创建目标
          </button>
        </div>

        <div className="space-y-4">
          {OKRS.map(okr => (
            <div key={okr.id} className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden group hover:border-primary/30 transition-all">
              <div className="p-6 flex items-center justify-between border-b border-slate-50">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-black text-xl text-slate-900 tracking-tight">{okr.id}: {okr.title}</h4>
                    {okr.tags.map(tag => (
                      <span key={tag} className="bg-primary/5 text-primary text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter border border-primary/10">{tag}</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 font-medium">{okr.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-primary tracking-tighter">{okr.progress}%</div>
                  <div className="text-[9px] text-slate-300 font-bold uppercase tracking-widest mt-1">总体进度</div>
                </div>
              </div>

              <div className="p-6 space-y-6 bg-slate-50/30">
                {okr.keyResults.map(kr => (
                  <div key={kr.id} className="flex items-center gap-6 group/kr">
                    <div className="w-12 h-12 bg-white rounded border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover/kr:border-primary group-hover/kr:text-primary transition-all shadow-sm">
                      <span className="font-black text-xs italic uppercase tracking-tighter">{kr.id}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-slate-700">{kr.title}</span>
                        <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{kr.current} / {kr.target}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${kr.progress}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-primary h-full rounded-full"
                        />
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-primary hover:bg-white rounded transition-all">
                      <Edit3 size={18} />
                    </button>
                  </div>
                ))}
                {okr.keyResults.length === 0 && (
                  <div className="py-2 text-center">
                    <p className="text-xs text-slate-400 italic">暂无关键结果，请添加 KR 以追踪进度</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="absolute right-6 bottom-32 bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40 hover:rotate-12 border-4 border-white">
        <Edit3 size={28} />
      </button>
    </div>
  );
}
