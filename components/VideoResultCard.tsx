import { Badge } from './Badge'
import { StatusIndicator } from './StatusIndicator'

interface VideoResultCardProps {
  courseName: string
  moduleLessonLabel: string
  thumbnail?: string
  clipLength: string
  description: string
  timestamp: number
  className?: string
}

export function VideoResultCard({
  courseName,
  moduleLessonLabel,
  thumbnail,
  clipLength,
  description,
  timestamp,
  className = '',
}: VideoResultCardProps) {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div className={`card hoverable ${className}`}>
      {thumbnail && (
        <div className="mb-3 rounded-md overflow-hidden">
          <img
            src={thumbnail}
            alt={courseName}
            className="w-full h-32 object-cover"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-heading-3 font-bold text-neutral-900">{moduleLessonLabel}</h3>
        <Badge variant="video" className="text-xs">Video</Badge>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <p className="text-body-small text-neutral-600">Course: {courseName}</p>
        <p className="text-body-small text-neutral-600">Clip: {clipLength}</p>
      </div>
      
      <p className="text-body text-neutral-700 mb-3">{description}</p>
      
      <div className="flex justify-between items-center">
        <StatusIndicator status="now-playing" label="Now Playing" />
        <p className="text-body-small text-neutral-600">Timestamp: {formatTime(timestamp)}</p>
      </div>
    </div>
  )
}