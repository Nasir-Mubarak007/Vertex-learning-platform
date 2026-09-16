interface ProgressBarProps {
  percentage: number
  className?: string
}

export function ProgressBar({ percentage, className = '' }: ProgressBarProps) {
  const progressWidth = `${percentage}%`

  return (
    <div className={`progress-bar h-1 rounded-none overflow-hidden ${className}`}>
      <div
        className="progress-bar-fill bg-primary-500 h-full rounded-none"
        style={{ width: progressWidth }}
      ></div>
    </div>
  )
}