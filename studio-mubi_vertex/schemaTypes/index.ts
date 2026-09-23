import {course} from './documents/course'
import {lesson} from './documents/lesson'
import {instructor} from './documents/instructor'
import {category} from './documents/category'
import {video} from './documents/video'
import {progress} from './documents/progress'
import {courseModule} from './objects/course-module'
import {outcome} from './objects/outcome'
import {resource} from './objects/resource'
import {videoChapter} from './objects/video-chapter'
import {videoChunk} from './objects/video-chunk'

export const schemaTypes = [
  course,
  lesson,
  instructor,
  category,
  video,
  progress,
  courseModule,
  outcome,
  resource,
  videoChapter,
  videoChunk,
]