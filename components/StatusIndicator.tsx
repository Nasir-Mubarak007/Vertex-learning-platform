interface StatusIndicatorProps {
  status?: 'in-progress' | 'completed' | 'now-playing' | 'landed'
  label?: string
  className?: string
}

export function StatusIndicator({ status = 'in-progress', label, className = '' }: StatusIndicatorProps) {
  const statusClasses = {
    'in-progress': 'status-dot-in-progress',
    completed: 'status-dot-completed',
    'now-playing': 'status-dot-now-playing',
    landed: 'status-dot-landed',
  }

  return (
    <div className={`status-indicator ${className}`}>
      <div className={`status-dot w-2 h-2 rounded-full ${statusClasses[status]}`} />
      {label && (
        <span className="ml-2 text-body-small font-medium text-neutral-700">
          {label}
        </span>
      )}
    </div>
  )
}