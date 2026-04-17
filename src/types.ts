export interface KPI {
  label: string;
  value: string;
  subValue?: string;
  trend?: {
    value: string;
    isUp: boolean;
  };
  icon: string;
  color: string;
}

export interface RiskAlert {
  id: string;
  type: 'error' | 'warning' | 'success';
  title: string;
  description: string;
  category: string;
  time: string;
}

export interface DepartmentPerformance {
  name: string;
  score: number;
}

export interface OKR {
  id: string;
  title: string;
  description: string;
  progress: number;
  tags: string[];
  keyResults: KeyResult[];
}

export interface KeyResult {
  id: string;
  title: string;
  target: string;
  current: string;
  progress: number;
}

export interface UserProfile {
  name: string;
  title: string;
  department: string;
  avatar: string;
  entryDate: string;
  currentQuarter: string;
  performancePrediction: string;
  metrics: {
    commits: { value: number; trend: string };
    bugRate: { value: string; trend: string };
    completionRate: { value: string; trend: string };
  };
  radarData: { subject: string; A: number; fullMark: number }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quality: number;
  velocity: number;
}

export interface SprintData {
  name: string;
  value: number;
}

export interface Project {
  id: string;
  name: string;
  phase: string;
  progress: number;
  status: 'on-track' | 'at-risk' | 'delayed';
  dueDate: string;
  members: string[];
  blocker?: string;
}
