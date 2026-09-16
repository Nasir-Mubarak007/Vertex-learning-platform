import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  const baseClasses = 'card bg-neutral-0 border border-neutral-300 rounded-md p-4 transition-all'
  const hoverClasses = 'hover:border-neutral-600 hover:shadow-md hover:-translate-y-1'

  return (
    <div className={`${baseClasses} ${hoverable ? hoverClasses : ''} ${className}`}>
      {children}
    </div>
  )
}