export type Education = {
  id: string
  school: string
  degree?: string
  fieldOfStudy?: string
  /** Shown next to the period, e.g. "CGPA: 8.5" */
  grade?: string
  period: {
    start: string
    end?: string
  }
  description?: string
  skills?: string[]
  isExpanded?: boolean
}
