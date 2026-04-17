import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ScatterChart, Scatter, ZAxis, Tooltip, Cell } from 'recharts';
import { TrendingUp, CheckCircle, AlertCircle, Calendar, Users, Bug, Target } from 'lucide-react';
import { SPRINT_DATA, TEAM_MEMBERS, PROJECTS } from '../data';
import { cn } from '../lib/utils';

export default function Team() {
  return (
    <div className="space-y-6">
      {/* Team Header Stats */}
      <section className="grid grid-cols-1 gap-4">
        <div className="bg-primary p-6 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[160px] shadow-lg shadow-primary/20">
          <div className="relative z-10">
            <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-2">团队平均 KPI</p>
            <h2 className="text-white text-4xl font-black tracking-tighter">94.2<span className="text-xl ml-1 font-bold opacity-50">%</span></h2>
          </div>
          <div className="relative z-10 flex flex-wrap items-center gap-2 mt-4">
            <div className="flex items-center text-white bg-white/10 px-3 py-1 rounded text-[10px] font-bold backdrop-blur-md border border-white/10">
              <TrendingUp size={12} className="mr-1.5" />
              +2.4% 较上月
            </div>
            <div className="flex items-center text-white bg-white/10 px-3 py-1 rounded text-[10px] font-bold backdrop-blur-md border border-white/10">
              <CheckCircle size={12} className="mr-1.5" />
              目标达成
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none">
             <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.6,-0.9C84.1,13.9,77.7,27.8,69,39.1C60.3,50.4,49.2,59.1,36.8,66.8C24.4,74.5,10.7,81.1,-2.7,85.8C-16.1,90.5,-29.2,93.3,-41.8,88.4C-54.4,83.5,-66.5,70.9,-75.2,56.6C-83.9,42.3,-89.2,26.2,-89.9,10.2C-90.6,-5.8,-86.7,-21.7,-78.9,-35.3C-71.1,-48.9,-59.4,-60.2,-46,-67.4C-32.6,-74.6,-17.3,-77.7,-1.1,-75.8C15.1,-73.9,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
             </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">迭代速率</span>
            <span className="text-[10px] text-primary font-black uppercase tracking-tight">平均 58 分</span>
          </div>
          <div className="h-20">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SPRINT_DATA}>
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {SPRINT_DATA.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.value > 50 ? '#005bb7' : '#005bb722'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-3 px-1">
            {SPRINT_DATA.map(d => (
              <span key={d.name} className="text-[8px] font-black text-slate-300 uppercase tracking-tighter">{d.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 gap-6">
        {/* Performance Distribution */}
        <div className="bg-white p-6 rounded shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-slate-900 font-bold text-lg tracking-tight">绩效分布</h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">质量与速率指数</p>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase">
                <div className="w-2 h-2 rounded-full bg-primary mr-1.5"></div> 开发
              </span>
              <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase">
                <div className="w-2 h-2 rounded-full bg-secondary-container mr-1.5"></div> 测试
              </span>
            </div>
          </div>
          
          <div className="h-[280px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis type="number" dataKey="velocity" name="速率" hide domain={[0, 100]} />
                <YAxis type="number" dataKey="quality" name="质量" hide domain={[0, 100]} />
                <ZAxis type="number" range={[400, 400]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="团队成员" data={TEAM_MEMBERS}>
                  {TEAM_MEMBERS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#005bb71a" />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
            
            {/* Custom Overlay for member portraits in scatter positions */}
            {TEAM_MEMBERS.map(member => (
              <div 
                key={member.id}
                className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ 
                  left: `${member.velocity}%`, 
                  top: `${100 - member.quality}%` 
                }}
              >
                <div className="w-full h-full rounded-full border-2 border-white shadow-sm overflow-hidden grayscale hover:grayscale-0 transition-all hover:scale-125 z-10 relative">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[9px] font-bold px-2 py-1 rounded whitespace-nowrap z-20">
                  {member.name} ({member.role})
                </div>
              </div>
            ))}

            {/* Axis grid labels */}
            <div className="absolute left-[-30px] top-1/2 -rotate-90 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] pointer-events-none">质量</div>
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] pointer-events-none">速率</div>
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 h-full w-px border-l border-dashed border-slate-200 pointer-events-none"></div>
          </div>
        </div>

        {/* Project Tracking */}
        <div className="space-y-6">
          {PROJECTS.map(project => (
            <div key={project.id} className={cn(
              "p-5 rounded border shadow-sm transition-all hover:translate-y-[-2px]",
              project.status === 'on-track' ? 'bg-white border-slate-100' : 'bg-white border-l-4 border-l-error'
            )}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn(
                      "text-[9px] font-black px-2 py-0.5 rounded-sm flex items-center tracking-tighter",
                      project.status === 'on-track' ? 'bg-green-50 text-success' : 'bg-error/10 text-error'
                    )}>
                      <div className={cn("w-1.5 h-1.5 rounded-full mr-1.5", project.status === 'on-track' ? 'bg-success' : 'bg-error')}></div>
                      {project.status === 'on-track' ? '正常推进' : '存在风险'}
                    </span>
                    <h4 className="text-slate-900 font-bold text-sm tracking-tight">{project.name}</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{project.phase}</p>
                </div>
                <span className={cn("text-xs font-black", project.status === 'on-track' ? 'text-primary' : 'text-error')}>
                  {project.progress}%
                </span>
              </div>
              
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div 
                  className={cn("h-full transition-all duration-1000", project.status === 'on-track' ? 'bg-primary' : 'bg-error')}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>

              {project.status === 'at-risk' && (
                <div className="bg-error/5 p-3 rounded flex items-start gap-3 mb-4">
                  <AlertCircle size={16} className="text-error flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-black text-error mb-0.5 uppercase tracking-tighter">严重阻塞</p>
                    <p className="text-[10px] text-slate-500 leading-relaxed italic">{project.blocker}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span className="flex items-center uppercase tracking-tighter">
                  <Calendar size={12} className="mr-1.5" /> {project.dueDate}
                </span>
                <div className="flex -space-x-2">
                  {project.members.map((m, i) => (
                    <div key={m} className={cn("w-6 h-6 rounded-full border-2 border-white overflow-hidden ring-1 ring-slate-100", `z-${30-i}`)}>
                      <img src={`https://picsum.photos/seed/${m}/100/100`} alt="m" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white text-[8px] font-black text-slate-400 z-0">+2</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Stats Bento */}
      <section className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-6 rounded flex flex-col justify-between border border-slate-100 transition-colors hover:bg-white group cursor-default">
            <Target className="text-primary mb-6 transition-transform group-hover:scale-110" size={24} />
            <div>
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">季度目标</h5>
              <p className="text-2xl font-black text-slate-900">12 / 15</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded flex flex-col justify-between border border-slate-100 transition-colors hover:bg-white group cursor-default">
            <Bug className="text-primary mb-6 transition-transform group-hover:scale-110" size={24} />
            <div>
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">待办问题</h5>
              <p className="text-2xl font-black text-error">24</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-6 rounded flex items-center gap-6 border border-slate-100 transition-colors hover:bg-white group cursor-default">
           <div className="w-16 h-16 rounded-full border-[6px] border-primary border-r-transparent rotate-45 flex items-center justify-center shrink-0">
             <span className="text-xs font-black -rotate-45 text-slate-900">75%</span>
           </div>
           <div>
             <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">效能得分</h5>
             <p className="text-[11px] font-medium text-slate-600 leading-snug">本周在 <span className="text-primary font-bold">“代码评审周期”</span> 方面提升最明显。</p>
           </div>
        </div>
      </section>
    </div>
  );
}
