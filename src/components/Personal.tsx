import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Code, Bug, CheckSquare, Target, UserCheck, MessageSquare, TrendingUp } from 'lucide-react';
import { USER_PROFILE, OKRS } from '../data';
import { cn } from '../lib/utils';

export default function Personal() {
  const { metrics, radarData } = USER_PROFILE;

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4">
        {/* User Info Card */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl overflow-hidden ring-4 ring-slate-50 flex-shrink-0">
              <img 
                src={USER_PROFILE.avatar} 
                alt={USER_PROFILE.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-slate-900 tracking-tight">{USER_PROFILE.name}</h2>
              <p className="text-xs text-slate-500 font-medium">{USER_PROFILE.title} · {USER_PROFILE.department}</p>
              <div className="mt-1.5 flex items-center">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] bg-primary/5 text-[9px] font-bold text-primary border-l-2 border-primary uppercase tracking-widest">
                  {USER_PROFILE.performancePrediction}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">入职时间</span>
              <span className="text-xs font-bold text-slate-700">{USER_PROFILE.entryDate}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-50">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">当前季度</span>
              <span className="text-xs font-bold text-slate-700">{USER_PROFILE.currentQuarter}</span>
            </div>
          </div>
        </div>

        {/* Metrics Card */}
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between active:bg-primary/5 transition-colors group">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Code size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">代码提交</p>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{metrics.commits.value.toLocaleString()}</h3>
              <p className="text-[9px] text-success font-black mt-1 flex items-center gap-1 uppercase tracking-tighter">
                <TrendingUp size={10} />
                {metrics.commits.trend}
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between active:bg-error/5 transition-colors group">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-error/10 flex items-center justify-center text-error">
                <Bug size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bug 率</p>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{metrics.bugRate.value}</h3>
              <p className="text-[9px] text-success font-black mt-1 flex items-center gap-1 uppercase tracking-tighter">
                <CheckSquare size={10} />
                {metrics.bugRate.trend}
              </p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between active:bg-secondary-container/10 transition-colors group">
            <div className="flex justify-between items-start">
              <div className="w-9 h-9 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                <CheckSquare size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">完成率</p>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">{metrics.completionRate.value}</h3>
              <p className="text-[9px] text-primary font-black mt-1 uppercase tracking-tighter">
                {metrics.completionRate.trend}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6">
        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 mb-8 flex items-center gap-2 uppercase tracking-widest">
            <Target className="text-primary" size={16} />
            能力模型雷达图
          </h3>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                <Radar
                   name="Value"
                   dataKey="A"
                   stroke="#0048c8"
                   fill="#0048c8"
                   fillOpacity={0.15}
                 />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">个人现状</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">团队平均</span>
            </div>
          </div>
        </div>

        {/* OKR Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 mb-8 flex items-center gap-2 uppercase tracking-widest">
            <Target className="text-primary" size={16} />
            OKR 目标达成进度
          </h3>
          <div className="space-y-8">
            {OKRS.map(okr => (
               <div key={okr.id}>
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-xs font-bold text-slate-700">{okr.id}: {okr.title}</h4>
                  <span className="text-[10px] font-black text-primary">{okr.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000" 
                    style={{ width: `${okr.progress}%` }}
                  ></div>
                </div>
                {okr.keyResults.slice(0, 1).map(kr => (
                  <p key={kr.id} className="mt-3 text-[10px] text-slate-400 font-medium">
                    {kr.id.toUpperCase()}: {kr.title} ({kr.progress === 100 ? '已完成' : '进行中'})
                  </p>
                ))}
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manager Feedback */}
      <section className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary shadow-sm">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white">
              <img 
                src="https://picsum.photos/seed/manager/100/100" 
                alt="Manager" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">陈总</span>
                <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded-[2px] font-bold uppercase">直接主管</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold tracking-tighter">2024-09-20</span>
            </div>
          </div>
          <div className="flex-grow">
            <div className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-slate-200 pl-4 py-1">
              “建国在Q3期间表现非常出色，特别是在**微服务化改造**项目中展现了极强的技术攻坚能力。系统拆分后的稳定性比预期更好。接下来的建议是：可以更多地参与到产品侧的前期讨论中，从架构角度为业务提供更多前瞻性支持。同时，可以尝试带一带组内的新人，将你的技术经验规模化复用。”
            </div>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-2 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform">确认反馈</button>
              <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold rounded uppercase tracking-widest active:scale-95 transition-transform">发起申诉</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
