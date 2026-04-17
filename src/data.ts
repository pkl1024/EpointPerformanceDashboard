import { KPI, RiskAlert, DepartmentPerformance, OKR, UserProfile, TeamMember, SprintData, Project } from './types';

export const OVERVIEW_KPIS: KPI[] = [
  {
    label: '项目交付率',
    value: '98.5%',
    icon: 'task_alt',
    color: 'primary',
  },
  {
    label: '质量得分',
    value: '4.85 / 5.0',
    icon: 'star_half',
    color: 'secondary',
  },
  {
    label: '研发产出比',
    value: '1 : 3.2',
    icon: 'analytics',
    color: 'tertiary',
  },
];

export const RISKS: RiskAlert[] = [
  {
    id: '1',
    type: 'error',
    category: '质量下滑',
    title: '电商SaaS项目代码覆盖率下降',
    description: '当前覆盖率 64%，低于 80% 安全基线，可能导致回归测试风险增加。',
    time: '2小时前',
  },
  {
    id: '2',
    type: 'warning',
    category: '资源超载',
    title: '大数据部门人均负载超限',
    description: '连续三周负载 > 110%，交付延期风险概率升至 45%。',
    time: '5小时前',
  },
  {
    id: '3',
    type: 'success',
    category: '风险解除',
    title: '支付中台压力测试达标',
    description: '并发性能提升 30%，已解除 Q4 扩容能力预警。',
    time: '昨天',
  },
];

export const DEPT_PERFORMANCE: DepartmentPerformance[] = [
  { name: '基础研发', score: 82.4 },
  { name: 'AI实验室', score: 96.8 },
  { name: '云原生部', score: 88.1 },
  { name: '前端架构', score: 74.2 },
  { name: '安全团队', score: 91.5 },
  { name: '中间件部', score: 84.9 },
];

export const USER_PROFILE: UserProfile = {
  name: '张建国',
  title: '高级开发工程师',
  department: '研发中心',
  avatar: 'https://picsum.photos/seed/profile1/200/200',
  entryDate: '2020.03.15',
  currentQuarter: '2024-Q3',
  performancePrediction: 'S级绩效预估',
  metrics: {
    commits: { value: 1284, trend: '+12.5% 较上月' },
    bugRate: { value: '0.08%', trend: '-2.1% 优于基准' },
    completionRate: { value: '98.2%', trend: '保持稳定' },
  },
  radarData: [
    { subject: '技术深度', A: 90, fullMark: 100 },
    { subject: '业务理解', A: 75, fullMark: 100 },
    { subject: '协作能力', A: 85, fullMark: 100 },
    { subject: '创新精神', A: 70, fullMark: 100 },
    { subject: '执行效率', A: 95, fullMark: 100 },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: '王伟', role: '技术专家', avatar: 'https://picsum.photos/seed/john/100/100', quality: 80, velocity: 80 },
  { id: '2', name: '李静', role: '测试开发', avatar: 'https://picsum.photos/seed/alice/100/100', quality: 90, velocity: 70 },
  { id: '3', name: '张强', role: '开发工程师', avatar: 'https://picsum.photos/seed/bob/100/100', quality: 60, velocity: 85 },
  { id: '4', name: '赵敏', role: 'UI开发', avatar: 'https://picsum.photos/seed/charlie/100/100', quality: 75, velocity: 75 },
];

export const SPRINT_DATA: SprintData[] = [
  { name: 'S21周期', value: 35 },
  { name: 'S22周期', value: 45 },
  { name: 'S23周期', value: 30 },
  { name: 'S24周期', value: 58 },
  { name: 'S25周期', value: 42 },
  { name: 'S26周期', value: 50 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: '智能核心 2.0',
    phase: '引擎架构升级阶段',
    progress: 82,
    status: 'on-track',
    dueDate: '2024年10月24日',
    members: ['1', '2', '3'],
  },
  {
    id: '2',
    name: '移动端重构',
    phase: '框架迁移 (Vue 转 React)',
    progress: 45,
    status: 'at-risk',
    dueDate: '2024年11月15日',
    members: ['4', '1'],
    blocker: '依赖瓶颈：API层同步问题导致周期26延迟4天。',
  },
];

export const OKRS: OKR[] = [
  {
    id: '1',
    title: '优化用户增长转化链路',
    description: '通过 UI 升级和流程简化，提升注册到下单的转化率',
    progress: 72,
    tags: ['Q2 核心'],
    keyResults: [
      { id: 'k1', title: '完成 12 组核心页面的 A/B 测试', target: '12', current: '8', progress: 66 },
      { id: 'k2', title: '新注册用户下单转化率从 5% 提升至 8.5%', target: '8.5%', current: '7.8%', progress: 80 },
    ],
  },
  {
    id: '2',
    title: '提升团队设计资产复用率',
    description: '建立标准化组件库与文档体系',
    progress: 40,
    tags: [],
    keyResults: [],
  },
];
