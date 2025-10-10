// Core Types for AURA Portfolio

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory
  technologies: string[]
  status: ProjectStatus
  progress: number
  startDate: string
  endDate?: string
  image: string
  gallery: string[]
  features: string[]
  impact: ProjectImpact
  challenges: string[]
  solutions: string[]
  nextSteps: string[]
  demoUrl?: string
  githubUrl?: string
  documentation?: string
  tags: string[]
  priority: number
}

export interface ProjectImpact {
  beneficiaries: number
  areaCovered: string
  keyMetrics: {
    metric: string
    value: string
    description: string
  }[]
  testimonials: Testimonial[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  content: string
  image?: string
  rating: number
  verified: boolean
}

export type ProjectCategory = 
  | 'geoai'
  | 'automation'
  | 'environmental'
  | 'humanitarian'
  | 'research'
  | 'commercial'

export type ProjectStatus = 
  | 'planning'
  | 'development'
  | 'testing'
  | 'deployed'
  | 'maintenance'
  | 'completed'

export interface Service {
  id: string
  title: string
  description: string
  category: ServiceCategory
  features: string[]
  pricing: PricingTier[]
  duration: string
  deliverables: string[]
  technologies: string[]
  icon: string
  popular: boolean
}

export interface PricingTier {
  name: string
  price: number
  currency: string
  features: string[]
  recommended: boolean
}

export type ServiceCategory = 
  | 'consultation'
  | 'development'
  | 'training'
  | 'automation'
  | 'analysis'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: SkillLevel
  experience: string
  projects: number
  certifications?: string[]
  icon: string
}

export type SkillCategory = 
  | 'programming'
  | 'ai-ml'
  | 'geospatial'
  | 'cloud'
  | 'database'
  | 'tools'
  | 'soft-skills'

export type SkillLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  category: string
  image: string
  readTime: number
  views: number
  likes: number
  featured: boolean
}

export interface ContactForm {
  name: string
  email: string
  organization?: string
  subject: string
  message: string
  projectType: string
  budget?: string
  timeline?: string
  priority: 'low' | 'medium' | 'high'
}

export interface ChatMessage {
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export interface DashboardData {
  projects: Project[]
  metrics: {
    totalProjects: number
    activeProjects: number
    completedProjects: number
    totalImpact: number
  }
  recentActivity: ActivityItem[]
  upcomingDeadlines: Deadline[]
}

export interface ActivityItem {
  id: string
  type: 'project' | 'meeting' | 'milestone' | 'achievement'
  title: string
  description: string
  timestamp: Date
  projectId?: string
}

export interface Deadline {
  id: string
  title: string
  projectId: string
  dueDate: Date
  priority: 'low' | 'medium' | 'high'
  completed: boolean
}

export interface MapData {
  center: [number, number]
  zoom: number
  markers: MapMarker[]
  layers: MapLayer[]
  bounds?: [[number, number], [number, number]]
}

export interface MapMarker {
  id: string
  position: [number, number]
  title: string
  description: string
  type: 'project' | 'location' | 'data-point'
  data?: Record<string, any>
}

export interface MapLayer {
  id: string
  name: string
  type: 'raster' | 'vector' | 'heatmap'
  source: string
  visible: boolean
  opacity: number
  style?: Record<string, any>
}

export interface AnimationConfig {
  type: 'fade' | 'slide' | 'scale' | 'rotate'
  duration: number
  delay: number
  direction?: 'up' | 'down' | 'left' | 'right'
  easing?: string
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'auto'
  primary: string
  accent: string
  particles: boolean
  animations: boolean
  reducedMotion: boolean
}

export interface UserPreferences {
  theme: ThemeConfig
  language: string
  notifications: boolean
  analytics: boolean
  cookies: boolean
}

export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: string
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Event Types
export interface PortfolioEvent {
  id: string
  type: 'project-completed' | 'milestone-reached' | 'achievement-unlocked' | 'skill-added'
  title: string
  description: string
  timestamp: Date
  data?: Record<string, any>
}

// Analytics Types
export interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  bounceRate: number
  averageSessionDuration: number
  topPages: PageAnalytics[]
  trafficSources: TrafficSource[]
  deviceTypes: DeviceAnalytics[]
  geographicData: GeographicData[]
}

export interface PageAnalytics {
  path: string
  views: number
  uniqueViews: number
  averageTime: number
  bounceRate: number
}

export interface TrafficSource {
  source: string
  medium: string
  sessions: number
  percentage: number
}

export interface DeviceAnalytics {
  type: string
  count: number
  percentage: number
}

export interface GeographicData {
  country: string
  region: string
  sessions: number
  percentage: number
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Component Props Types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  id?: string
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animation?: AnimationConfig
  delay?: number
  duration?: number
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void
  onHover?: () => void
  disabled?: boolean
  loading?: boolean
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: Record<string, any>
  timestamp: Date
  stack?: string
}

export type ErrorBoundaryState = {
  hasError: boolean
  error?: AppError
}

// Form Types
export interface FormField {
  name: string
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file'
  label: string
  placeholder?: string
  required: boolean
  validation?: ValidationRule[]
  options?: { value: string; label: string }[]
}

export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom'
  value?: any
  message: string
  validator?: (value: any) => boolean
}

// State Management Types
export interface AppState {
  theme: ThemeConfig
  user: UserPreferences | null
  projects: Project[]
  services: Service[]
  skills: Skill[]
  loading: boolean
  error: AppError | null
}

export interface Action<T = any> {
  type: string
  payload?: T
  error?: AppError
}

// API Types
export interface APIClient {
  get: <T>(url: string, config?: any) => Promise<APIResponse<T>>
  post: <T>(url: string, data?: any, config?: any) => Promise<APIResponse<T>>
  put: <T>(url: string, data?: any, config?: any) => Promise<APIResponse<T>>
  delete: <T>(url: string, config?: any) => Promise<APIResponse<T>>
}
