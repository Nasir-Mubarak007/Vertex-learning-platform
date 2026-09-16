import { Badge } from './Badge'
import { ProgressBar } from './ProgressBar'
import { StatusIndicator } from './StatusIndicator'

interface LessonCardProps {
  title: string
  instructor: string
  duration: string
  progress?: number
  isCompleted?: boolean
  thumbnail?: string
  description?: string
  className?: string
}

export function LessonCard({
  title,
  instructor,
  duration,
  progress,
  isCompleted,
  thumbnail,
  description,
  className = '',
}: LessonCardProps) {
  return (
    <div className={`card hoverable ${className}`}>
      {thumbnail && (
        <div className="mb-3 rounded-md overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-32 object-cover"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-heading-3 font-bold text-neutral-900">{title}</h3>
        <Badge variant="neutral" className="text-xs">Lesson</Badge>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <p className="text-body-small text-neutral-600">Instructor: {instructor}</p>
        <p className="text-body-small text-neutral-600">Duration: {duration}</p>
      </div>
      
      {description && (
        <p className="text-body text-neutral-700 mb-3">{description}</p>
      )}
      
      {progress !== undefined && (
        <div className="mb-2">
          <ProgressBar percentage={progress} className="mb-1" />
          <p className="text-body-small text-neutral-600">Progress: {progress}%</p>
        </div>
      )}
      
      {isCompleted && (
        <StatusIndicator status="completed" label="Completed" />
      )}
    </div>
  )
}