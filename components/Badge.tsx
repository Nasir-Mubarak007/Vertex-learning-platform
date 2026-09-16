import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'neutral' | 'video' | 'lesson' | 'popular'
  className?: string
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-900',
    neutral: 'bg-neutral-100 text-neutral-900',
    video: 'bg-primary-500 text-white',
    lesson: 'bg-blue-500 text-white',
    popular: 'bg-primary-400 text-white',
  }

  return (
    <span className={`badge px-2 py-1 rounded-xs text-xs font-medium uppercase tracking-wider ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}