import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { TrendingUp, CheckCircle, StarHalf, BarChart3, AlertTriangle, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { OVERVIEW_KPIS, RISKS, DEPT_PERFORMANCE } from '../data';
import { cn } from '../lib/utils';

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="grid grid-cols-1 gap-4 items-stretch">
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between overflow-hidden relative border border-slate-100">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">2024 年度预测</span>
              <div className="h-px flex-grow bg-slate-100"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 font-sans tracking-tight">年度目标达成预测</h2>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-black text-primary tracking-tighter">94.2</span>
              <span className="text-xl font-bold text-slate-400 mb-1 font-sans opacity-50">%</span>
              <div className="ml-4 flex items-center text-success bg-green-50 px-2 py-0.5 rounded text-[11px] mb-2 font-bold border border-green-100">
                <TrendingUp size={12} className="mr-1" />
                2.4%
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500 max-w-md leading-relaxed">基于当前 Q1-Q3 表现及研发效能趋势，预计全年将超额完成核心 KPI 指标。质量得分稳定性是后续关键因素。</p>
          </div>
          <div className="mt-6 flex flex-col gap-4 relative z-10">
            <div className="flex-1">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">当前进度</span>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">置信指数</span>
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <CheckCircle size={14} className="text-primary" />
                高度可靠
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-primary p-5 rounded-xl text-white shadow-lg shadow-primary/20 flex justify-between items-center active:scale-[0.98] transition-all cursor-pointer">
            <div>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">项目交付率</span>
              <div className="text-xl font-black mt-1">98.5%</div>
            </div>
            <div className="p-2 bg-white/10 rounded-lg">
              <CheckCircle size={24} />
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 flex justify-between items-center active:scale-[0.98] transition-all cursor-pointer">
            <div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">质量得分</span>
              <div className="text-xl font-black mt-1 text-slate-900">4.85 / 5.0</div>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg text-primary">
              <StarHalf size={24} />
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 flex justify-between items-center active:scale-[0.98] transition-all cursor-pointer">
            <div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">研发产出比</span>
              <div className="text-xl font-black mt-1 text-slate-900">1 : 3.2</div>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
              <BarChart3 size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="grid grid-cols-1 gap-6">
        {/* Department Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">部门绩效排名</h3>
              <p className="text-sm text-slate-400">基于综合加权得分的研发效能分布</p>
            </div>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DEPT_PERFORMANCE} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                  {DEPT_PERFORMANCE.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.score > 90 ? '#005bb7' : '#005bb733'} 
                      className="hover:fill-primary/80 transition-colors"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Alerts */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-error" size={20} />
            绩效风险预警
          </h3>
          <div className="space-y-4">
            {RISKS.map((risk) => (
              <div 
                key={risk.id} 
                className={cn(
                  "p-4 bg-slate-50 border-l-4 rounded-r-md transition-all hover:translate-x-1 cursor-pointer",
                  risk.type === 'error' ? 'border-error' : risk.type === 'warning' ? 'border-warning' : 'border-success'
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    risk.type === 'error' ? 'text-error' : risk.type === 'warning' ? 'text-warning' : 'text-success'
                  )}>
                    {risk.category}
                  </span>
                  <span className="text-[10px] text-slate-400">{risk.time}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{risk.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Row */}
      <section className="grid grid-cols-1 gap-6">
        <div className="bg-slate-50 p-6 rounded-lg flex gap-4 items-start border border-slate-100">
          <div className="w-12 h-12 rounded bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
            <Lightbulb className="text-primary" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1 text-sm">效能提升建议</h4>
            <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
              <li>AI 实验室的自动化工具链值得在公司层面推广，预计可提升整体研发产出 15%。</li>
              <li>建议针对前端架构组启动专项代码质量攻坚，修复技术债。</li>
            </ul>
          </div>
        </div>
        <div className="bg-primary/5 p-6 rounded-lg flex gap-4 items-start border border-primary/10">
          <div className="w-12 h-12 rounded bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
            <Rocket className="text-white" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1 text-sm">下季度增长引擎</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Q4 重点应放在“全球化交付模型”建设上。通过跨时区协作优化，交付率有望突破 99.5% 的历史峰值。
            </p>
            <button className="mt-2 text-[10px] font-bold text-primary flex items-center gap-1 group">
              查看完整规划书 <ArrowRight className="group-hover:translate-x-1 transition-transform" size={10} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
